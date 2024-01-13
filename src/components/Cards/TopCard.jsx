import {useState, useEffect} from "react";

export const TopCard = ({position, name, score}) => {
    const [positionColor, setPositionColor] = useState("text-gray-800");
    const [positionBgColor, setPositionBgColor] = useState("bg-gray-100");

    useEffect(() => {
        if (position === 1) {
            setPositionColor("text-yellow-600");
            setPositionBgColor(
                "bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500"
            );
        } else if (position === 2) {
            setPositionColor("text-gray-500");
            setPositionBgColor(
                "bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400"
            );
        } else if (position === 3) {
            setPositionColor("text-yellow-700");
            setPositionBgColor(
                "bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400"
            );
        }
    }, []);
    return (
        <li className={`p-2 ${positionBgColor} rounded-xl`}>
            <div className="flex items-center justify-between text-xl">
                <div className="flex items-center">
                    <span
                        className={`px-2 text-3xl font-bold ${positionColor}`}
                    >
                        {position}
                    </span>
                    <div className="flex space-x-1 items-center justify-between">
                        <img
                            className="rounded-full "
                            src="https://tailwindui.com/img/avatar-3.jpg"
                            alt="profile"
                            width="40"
                        />
                        <span className="font-light text-base truncate ...">
                            {name}
                        </span>
                    </div>
                </div>
                <p className={`font-black ${position === 1 ? "" : ""}`}>
                    {score}
                </p>
            </div>
        </li>
    );
};
