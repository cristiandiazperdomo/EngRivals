import {Link, useNavigate} from "react-router-dom";
import {logout} from "../../redux/actions/userActions";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {ProfilePicture} from "../ProfilePicture/ProfilePicture";

export const LoggedHeaderDropdown = ({userInfo}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout(navigate));
    };

    return (
        <button
            className="relative flex items-center text-gray-500 text-3xl group ml-2 sm:ml-0"
            onClick={() => setShowDropdown(!showDropdown)}
        >
            <svg
                className="transition-all duration-100 w-3 h-3 mr-1 text-gray-500 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                />
            </svg>
            <ProfilePicture name={userInfo?.name} />
            <div
                id="dropdownInformation"
                className={`absolute top-12 transition-all duration-50 ${
                    showDropdown ? "opacity-100 z-50" : "opacity-0 -z-20"
                } right-0 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600`}
            >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white truncate">
                    <div>{userInfo?.name}</div>
                    <div className="font-medium truncate">
                        {userInfo?.email}
                    </div>
                </div>
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformationButton"
                >
                    <li>
                        <Link
                            to="/profile"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Profile
                        </Link>
                    </li>
                </ul>
                <div className="py-2" onClick={handleLogout}>
                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                    </p>
                </div>
            </div>
        </button>
    );
};
