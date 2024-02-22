import {useState, useEffect} from "react";

export const useInitialState = () => {
    const [isSideBarActive, setIsSideBarActive] = useState(
        window.visualViewport.width > 900
    );

    const toggleSideBar = () => {
        setIsSideBarActive(!isSideBarActive);
    };

    return {
        toggleSideBar,
        isSideBarActive,
    };
};
