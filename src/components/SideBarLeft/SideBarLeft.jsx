import {useContext} from "react";
import {Brand} from "../Brand/Brand";
import {MyContext} from "../../context/AppContext";
import {Link} from "react-router-dom";

export const SideBarLeft = () => {
    const {toggleSideBar, isSideBarActive} = useContext(MyContext);

    return (
        <aside
            id="cta-button-sidebar"
            className={`absolute sm:fixed top-0 left-0 z-40 w-64 bottom-0 transition-transform duration-500 ${
                isSideBarActive ? "translate-x-0" : "-translate-x-full"
            }`}
            aria-label="Sidebar"
        >
            <div className="h-screen w-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-gray-50 via-gray-50 to-transparent grid justify-center">
                <div className="pb-2 pt-3 space-x-4 flex justify-between self-start items-center">
                    <Brand />
                    <svg
                        onClick={toggleSideBar}
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-arrow-bar-left text-gray-500 hover:text-gray-900 cursor-pointer transition-all duration-150 sm:hidden"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 12l10 0" />
                        <path d="M4 12l4 4" />
                        <path d="M4 12l4 -4" />
                        <path d="M20 4l0 16" />
                    </svg>
                </div>
                <ul className="space-y-2 font-medium min-w-[200px] sm:-mt-40 bg-gray-20">
                    <li>
                        <Link
                            to="/dashboard"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-150 icon icon-tabler icon-tabler-home flex-shrink-0 w-6 h-6 text-gray-500 group-hover:text-gray-900"
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
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                            </svg>
                            <span className="ms-4">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/grouplessons"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-red-100 hover:text-red-600 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-150 icon icon-tabler icon-tabler-sword w-6 h-6 text-gray-500 group-hover:text-red-600"
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
                                <path d="M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9z" />
                                <path d="M6.5 11.5l6 6" />
                            </svg>
                            <span className="flex-1 ms-4 whitespace-nowrap hover:text-red-600">
                                Warzone
                            </span>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-yellow-100 group"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-stars transition-all duration-150 icon icon-tabler icon-tabler-settings-filled flex-shrink-0 w-6 h-6 text-gray-500 group-hover:text-yellow-500"
                                width="24"
                                height="24"
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
                                <path d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                <path d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                                <path d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                            </svg>
                            <span className="flex-1 ms-4 whitespace-nowrap">
                                Leaderboard
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
