import {Button} from "@radix-ui/themes";
import {useContext, useEffect, useState} from "react";

import notFound from "../../assets/floating.svg";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export const Lobbies = ({
    handleJoinALesson,
    handleCreateRandomLesson,
    userInfo,
    setIsLookingForAGame,
    setCategorySelected,
}) => {
    const [client, setClient] = useState(null);
    const [lobbies, setLobbies] = useState([]);

    const hasAlreadyCreatedAGame = () => {
        const lobby = lobbies.find((lobby) => lobby.creatorId === userInfo?.id);

        if (lobby !== null && lobby !== undefined) {
            setIsLookingForAGame(true);
            setCategorySelected(lobby?.title);
        } else {
            setIsLookingForAGame(false);
            setCategorySelected("");
        }
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
                stompClientInstance.subscribe(
                    "/rooms",
                    (message) => {
                        const rooms = JSON.parse(message.body);
                        setLobbies(rooms);
                    },
                    {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    }
                );
                setClient(stompClientInstance);
            },
            (error) => {
                console.error("Error al conectar:", error);
            }
        );
    }, []);

    useEffect(() => {
        if (userInfo !== null) hasAlreadyCreatedAGame();
    }, [lobbies, userInfo]);

    useEffect(() => {
        const getChallenges = async () => {
            const response = await fetch(
                "http://localhost:8080/v1/api/challenges",
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );
            const data = await response.json();
            setLobbies(data);
        };

        if (lobbies === null || lobbies.length === 0) getChallenges();
    }, []);

    return (
        <>
            <div className="flex sm:justify-between items-baseline sm:items-center my-12 pr-4">
                <h3 className="text-3xl font-bold text-red-700">Lobbies</h3>
                <span className="text-gray-500 text-base sm:text-lg ml-2">
                    ({lobbies.length})
                </span>
            </div>
            <div className="my-10 mb-2 pr-4">
                {!(
                    userInfo?.status === 500 ||
                    userInfo?.status === 403 ||
                    localStorage.getItem("eng_token") === null
                ) && (
                    <div className="animate-fade-in">
                        {lobbies.length !== 0 ? (
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg h-[calc(40px+62px+62px+62px+62px+62px)] bg-gray-50 ">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 bg-gray-50"
                                            >
                                                Category
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 bg-white"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 bg-gray-50"
                                            >
                                                People
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 bg-white"
                                            >
                                                Join
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {lobbies?.map((lobby) => {
                                            const {
                                                title,
                                                challengeId,
                                                amountOfPeople,
                                                creatorId,
                                                isFull,
                                            } = lobby;

                                            return (
                                                <tr
                                                    className="border-b border-gray-200"
                                                    key={challengeId}
                                                >
                                                    <th
                                                        scope="row"
                                                        className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap ${
                                                            creatorId ===
                                                            userInfo?.id
                                                                ? "bg-green-200"
                                                                : "bg-gray-50"
                                                        } h-[62px]`}
                                                    >
                                                        <span className="capitalize">
                                                            {title.slice(0, 1)}
                                                        </span>
                                                        <span className="lowercase">
                                                            {title.slice(
                                                                1,
                                                                title.length
                                                            )}
                                                        </span>
                                                    </th>
                                                    <td
                                                        className={`px-6 h-[62px] flex items-center h-[62px] ${
                                                            creatorId ===
                                                            userInfo?.id
                                                                ? "bg-green-200"
                                                                : "bg-white"
                                                        }`}
                                                    >
                                                        {isFull ? (
                                                            <>
                                                                In game{" "}
                                                                <span className="relative flex h-3 w-3 ml-2 bg-white">
                                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                                                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-200"></span>
                                                                </span>
                                                            </>
                                                        ) : (
                                                            <>
                                                                Waiting{" "}
                                                                <span
                                                                    className={`relative flex h-3 w-3 ml-2 bg-transparent`}
                                                                >
                                                                    <span
                                                                        className={`animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 ${
                                                                            creatorId ===
                                                                            userInfo?.id
                                                                                ? "bg-green-300"
                                                                                : "bg-gray-200"
                                                                        }`}
                                                                    ></span>
                                                                    <span
                                                                        className={`relative inline-flex rounded-full h-3 w-3 ${
                                                                            creatorId ===
                                                                            userInfo?.id
                                                                                ? "bg-green-600"
                                                                                : "bg-gray-300"
                                                                        }`}
                                                                    ></span>
                                                                </span>
                                                            </>
                                                        )}
                                                    </td>
                                                    <td
                                                        className={`px-6 py-4 h-[62px] ${
                                                            creatorId ===
                                                            userInfo?.id
                                                                ? "bg-green-200"
                                                                : "bg-gray-50"
                                                        }`}
                                                    >
                                                        {amountOfPeople}/2
                                                    </td>
                                                    <td
                                                        className={`px-6 py-4 h-[62px] ${
                                                            creatorId ===
                                                            userInfo?.id
                                                                ? "bg-green-200"
                                                                : "bg-white"
                                                        }`}
                                                    >
                                                        {creatorId !==
                                                            userInfo?.id && (
                                                            <Button
                                                                color="green"
                                                                variant="outline"
                                                                onClick={() =>
                                                                    handleJoinALesson(
                                                                        lobby
                                                                    )
                                                                }
                                                            >
                                                                Join
                                                            </Button>
                                                        )}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="h-[calc(40px+62px+62px+62px+62px+62px)] bg-gray-100 relative flex justify-center items-center overflow-x-auto shadow-md sm:rounded-lg w-full ">
                                <div className="flex flex-col text-center items-center space-y-2">
                                    <p className="font-bold text-lg">
                                        No lessons found
                                    </p>
                                    <img
                                        src={notFound}
                                        alt="not found"
                                        className="w-60"
                                    />
                                    <div className="flex space-x-2 items-center">
                                        <p className="text-lg font-bold">
                                            Create a random lesson
                                        </p>
                                        <Button
                                            onClick={handleCreateRandomLesson}
                                            variant="solid"
                                            color="red"
                                            size="3"
                                        >
                                            Create
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
