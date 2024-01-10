import {Link} from "react-router-dom";

export const Brand = () => {
    return (
        <Link className="flex space-x-2 items-center">
            <img
                src="https://i.imgur.com/QiZzgWO.png"
                width="48"
                className="-mr-2"
            ></img>
            <div className="font-semibold text-xl">
                <span className="text-yellow-400 font-bold"></span>Eng
                <span className="text-black">Rivals</span>
            </div>
        </Link>
    );
};
