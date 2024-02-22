import {Link} from "react-router-dom";

import logo from "../../assets/smaller-logo.png";
import {useSelector} from "react-redux";

export const Brand = () => {
    const {userInfo} = useSelector((state) => state.userReducer);

    return (
        <Link
            to={userInfo === null ? "/" : "/dashboard"}
            className="flex space-x-0 sm:space-x-2 items-center mt-2"
        >
            <img src={logo} width="38" className="object-cover"></img>
            <h1 className="font-semibold text-xl">
                <span className="text-yellow-400 font-bold"></span>Eng
                <span className="text-black">Rivals</span>
            </h1>
        </Link>
    );
};
