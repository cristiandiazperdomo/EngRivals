import {useEffect, useState} from "react";

export const UserPositionInTop = ({score}) => {
    const [position, setPosition] = useState("...");

    useEffect(() => {
        const getPlaceInTop = async () => {
            const response = await fetch(
                "http://localhost:8080/v1/api/users/user-position",
                {
                    headers: {
                        Authorization:
                            "Bearer " + localStorage.getItem("eng_token"),
                    },
                }
            );

            const {position} = await response.json();

            setPosition(position);
        };

        getPlaceInTop();
    }, []);

    return (
        <div className="flex flex-wrap justify-end items-center my-2 sm:my-0 sm:mr-4 w-100">
            <div className="flex text-2xl">
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-stars-filled w-8 text-yellow-400 relative"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M17.657 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.907 -.278l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.773l-.143 .007z"
                            strokeWidth="0"
                            fill="currentColor"
                        />
                        <path
                            d="M6.057 12.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.895l1.708 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.324 -1.891l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                            strokeWidth="0"
                            fill="currentColor"
                        />
                        <path
                            d="M11.857 2.007a1.39 1.39 0 0 0 -1.103 .765l-.855 1.723l-1.907 .277c-.52 .072 -.96 .44 -1.124 .944l-.038 .14c-.1 .465 .046 .954 .393 1.29l1.377 1.337l-.326 1.892a1.393 1.393 0 0 0 2.018 1.465l1.708 -.894l1.709 .896a1.388 1.388 0 0 0 1.462 -.105l.112 -.09a1.39 1.39 0 0 0 .442 -1.272l-.325 -1.892l1.38 -1.339c.38 -.371 .516 -.924 .352 -1.427l-.051 -.134a1.39 1.39 0 0 0 -1.073 -.81l-1.908 -.279l-.853 -1.722a1.393 1.393 0 0 0 -1.247 -.772l-.143 .007z"
                            strokeWidth="0"
                            fill="currentColor"
                        />
                    </svg>
                    <span
                        className="bg-white bg-opacity-75 p-0.5 absolute rounded-xl animate-zoom-in top-1.5 right-3"
                        style={{
                            animationTimingFunction: "steps(52)",
                            animationIterationCount: "infinite",
                            animationDuration: "3000ms",
                        }}
                    ></span>
                </div>
                <span className="font-black text-2xl text-gray-600">
                    {score}
                </span>
            </div>
            <div className="flex text-yellow-600 text-2xl ml-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin-filled w-7 text-yellow-400"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                        strokeWidth="0"
                        fill="currentColor"
                    />
                </svg>
                <span className="font-black text-2xl text-gray-600">
                    {position}
                </span>
            </div>
        </div>
    );
};
