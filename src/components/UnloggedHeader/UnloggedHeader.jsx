import {Button} from "@radix-ui/themes";
import {Link} from "react-router-dom";
import {Brand} from "../Brand/Brand";
import {UnloggedNavHeaderModal} from "../UnloggedNavHeaderModal/UnloggedNavHeaderModal";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProfilePicture} from "../ProfilePicture/ProfilePicture";
import {getUserInfo} from "../../redux/actions/userActions";
import swords from "../../assets/swords.svg";
import {LoggedHeaderDropdown} from "../LoggedHeaderDropdown/LoggedHeaderDropdown";

export const Header = () => {
    const [showMobileNavHeader, setShowMobileNavHeader] = useState(false);

    const {userInfo} = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo === null) dispatch(getUserInfo());
    }, [userInfo]);

    console.log(userInfo);

    return (
        <>
            {showMobileNavHeader && (
                <UnloggedNavHeaderModal
                    hideModal={() => setShowMobileNavHeader(false)}
                />
            )}
            <header className="w-full flex justify-between items-center text-2xl py-2">
                <div className="flex flex-row items-center justify-between h-[70px] w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => setShowMobileNavHeader(true)}
                        className="icon icon-tabler icon-tabler-menu-2 text-gray-700 w-[32px] mt-2 cursor-pointer transition-all duration-150 flex md:hidden mr-2"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                    <Brand />
                    <div className="hidden sm:flex items-center space-x-4 lg:space-x-8 px-4 mt-2">
                        <div className="hidden items-center space-x-4 lg:flex text-sm font-medium">
                            <a>Home</a>
                            <a>Information</a>
                            <a>Pricing</a>
                            <a>About us</a>
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-1 sm:space-x-4 mt-2">
                        {/* <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-moon-filled cursor-pointer text-black hover:text-gray-700"
                                width="20"
                                height="20"
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
                                <path
                                    d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                                    strokeWidth="0"
                                    fill="currentColor"
                                />
                            </svg>
                        </div> */}
                        {userInfo === null || userInfo?.status === 500 ? (
                            <div className="flex space-x-0.5 sm:space-x-2">
                                <Link to="/signin" className="hidden sm:flex">
                                    <Button
                                        className="p-5 transition-all duration-150 text-black hover:text-gray-700"
                                        style={{
                                            backgroundColor: "transparent",
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button
                                        className="transition-all duration-150 p-5 bg-black hover:bg-gray-600"
                                        radius="full"
                                    >
                                        Sign Up
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="flex space-x-2 sm:space-x-2">
                                <Link to="/grouplessons">
                                    <Button className="transition-all duration-100 bg-red-700 w-100 h-[44px] hover:bg-red-800">
                                        <img src={swords} alt="sword" />
                                        <span className="hidden sm:flex">
                                            Start Now
                                        </span>
                                    </Button>
                                </Link>
                                <LoggedHeaderDropdown userInfo={userInfo} />
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};
