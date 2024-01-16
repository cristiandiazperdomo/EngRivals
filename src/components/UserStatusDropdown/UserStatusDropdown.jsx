import {useState} from "react";

export const UserStatusDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="absolute right-0 top-[42%]">
            <button
                id="dropdownLeftEndButton"
                data-dropdown-toggle="dropdownLeftEnd"
                data-dropdown-placement="left-end"
                className="relative transition-all duration-300 rounded-full me-3 mb-3 md:mb-0 text-white bg-red-500 hover:bg-green-300 focus:outline-none focus:ring-blue-300 font-medium text-sm p-1 text-center inline-flex items-center dark:focus:ring-blue-800"
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
            >
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="w-14 rounded-full"
                    alt="opponent"
                />
            </button>

            {showDropdown && (
                <div
                    id="dropdownLeftEnd"
                    className="absolute right-24 -top-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        className="p-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownLeftEndButton"
                    >
                        I am faster!
                    </ul>
                </div>
            )}
        </div>
    );
};
