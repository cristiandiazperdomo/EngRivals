import {Link} from "react-router-dom";

export const LoggedHeaderDropdown = ({showDropdown}) => {
    return (
        <div
            id="dropdownInformation"
            className={`absolute top-12 transition-all duration-50 ${
                showDropdown ? "opacity-100 z-50" : "opacity-0 -z-20"
            } right-0 text-left bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600`}
        >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">bonnie@green.com</div>
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
            <div className="py-2">
                <Link
                    to="/signin"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                    Sign out
                </Link>
            </div>
        </div>
    );
};
