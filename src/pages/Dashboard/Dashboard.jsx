import {LoggedHeader} from "../../components/LoggedHeader/LoggedHeader";
import {SideBar} from "../../components/SideBar/SideBar";

export const Dashboard = () => {
    return (
        <div>
            <LoggedHeader />
            <SideBar />
            <div className="px-4 sm:ml-64">
                <div className="px-4 rounded-lg dark:border-gray-700"></div>
            </div>
        </div>
    );
};
