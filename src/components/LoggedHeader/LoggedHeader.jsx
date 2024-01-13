import {useContext} from "react";
import {useLocation} from "react-router-dom";
import {MyContext} from "../../context/AppContext";

export const LoggedHeader = () => {
    const {toggleSideBar, isSideBarActive} = useContext(MyContext);

    const location = useLocation();

    return (
        <header className={`bg-gray-50`}>
            <div
                className={`transition-all duration-500 ${
                    isSideBarActive ? "ml-0 sm:ml-64" : "container mx-auto"
                }`}
            >
                <div className="mx-8">
                    <div className="flex justify-between items-center py-8">
                        <div className="flex text-md font-bold text-gray-500">
                            <svg
                                onClick={toggleSideBar}
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-menu-2 text-gray-500 w-8 hover:text-gray-900 cursor-pointer transition-all duration-150"
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
                                />
                                <path d="M4 6l16 0" />
                                <path d="M4 12l16 0" />
                                <path d="M4 18l16 0" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-compass w-8 ml-4 sm:ml-8 mr-1 hover:text-gray-900 cursor-pointer transition-all duration-150"
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
                                />
                                <path d="M8 16l2 -6l6 -2l-2 6l-6 2" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 3l0 2" />
                                <path d="M12 19l0 2" />
                                <path d="M3 12l2 0" />
                                <path d="M19 12l2 0" />
                            </svg>
                            <span className="mt-1 capitalize">
                                {location.pathname.replace("/", "")}
                            </span>
                        </div>
                        <button className="flex items-center text-gray-500 text-3xl group">
                            ...
                            <img
                                src="https://tailwindui.com/img/avatar-3.jpg"
                                className="rounded-full ml-0.5 w-11 group-hover:shadow-xl group-hover:shadow-gray-300"
                                alt="profile"
                            />
                        </button>
                    </div>
                    <div className="rounded-lg dark:border-gray-700"></div>
                </div>
            </div>
        </header>
    );
};
