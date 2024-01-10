import {useState} from "react";

export const useInitialState = () => {
    const [isSideBarActive, setIsSideBarActive] = useState(true);

    const toggleSideBar = () => {
        setIsSideBarActive(!isSideBarActive);
    };

    return {
        toggleSideBar,
        isSideBarActive,
    };
};
