import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {PreparingGame} from "../PreparingGame/PreparingGame";
import {getUserInfo} from "../../redux/actions/userActions";

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [secondsInFormat, setSecondsInFormat] = useState(0);
    const [showLoader, setShowLoader] = useState(true);
    const [client, setClient] = useState(null);
    const [userConnected, setUserConnected] = useState(false);

    const {challenge} = useSelector((state) => state.challengeReducer);
    const {userInfo} = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {id} = useParams();

    const handleGetSeconds = () => {
        const currentTime = new Date();
        let creationTime = new Date(challenge?.creationTime);

        creationTime.setMinutes(creationTime.getMinutes() + 2);

        const totalSeconds = Math.floor(
            (creationTime.getTime() - currentTime.getTime()) / 1000
        );

        const totalMinutes = totalSeconds / 60;

        if (totalMinutes <= 2 && showLoader) {
            setShowLoader(false);
        }

        const player = challenge?.players?.find(
            (player) => player.userId === userInfo?.id
        );

        if (player?.finishTime !== null && player?.finishTime !== undefined) {
            console.log("acá se gue");
            navigate("/completed/" + id);
        }

        if (totalSeconds <= 0) {
            const headers = {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            };
            const END_GAME = "/challenges/end-game/" + id;
            client.send(END_GAME, headers);
        }

        setSeconds(totalSeconds);
        setMinutes(Math.floor(totalMinutes));
        setSecondsInFormat(totalSeconds % 60);
    };

    useEffect(() => {
        if (client !== null) return;
        const socket = new SockJS("http://localhost:8080/ws");
        const stompClientInstance = Stomp.over(socket);

        stompClientInstance.connect(
            {
                Authorization: "Bearer " + localStorage.getItem("eng_token"),
            },
            (frame) => {
                setClient(stompClientInstance);
            },
            (error) => {
                console.error("Error al conectar:", error);
            }
        );
    }, []);

    useEffect(() => {
        if (seconds === 0 && challenge !== null) handleGetSeconds();

        const idInterval = setInterval(() => {
            if (challenge !== null && userInfo !== null) handleGetSeconds();
        }, 1000);

        return () => clearInterval(idInterval);
    }, [seconds, challenge]);

    return (
        <div>
            {showLoader && <PreparingGame seconds={secondsInFormat} />}
            <div className="flex fixed bg-gray-50 sm:bg-transparent bg-opacity-90 sm:relative top-0 left-0 mt-2 pl-4 sm:pl-0 font-bold sm:font-normal">
                <div className="flex space-x-2 text-gray-600 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-clock-hour-12"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M12 7v5"></path>
                    </svg>
                    <span className="text-xl">
                        {minutes}:
                        {secondsInFormat < 10
                            ? "0" + secondsInFormat
                            : secondsInFormat}
                    </span>
                </div>
            </div>
        </div>
    );
};
