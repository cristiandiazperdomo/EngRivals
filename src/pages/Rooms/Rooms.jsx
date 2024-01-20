import {CompletePhrase} from "../../components/Challenges/CompletePhrase";
import {Translate} from "../../components/Challenges/Translate";
import {UserStatusDropdown} from "../../components/UserStatusDropdown/UserStatusDropdown";
import {RoomHeader} from "../../components/RoomHeader/RoomHeader";
import {RoomFooter} from "../../components/RoomFooter/RoomFooter";
import {useEffect} from "react";
import {getChallenge} from "../../redux/actions/challengeActions";
import {useDispatch} from "react-redux";

export const Rooms = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChallenge());
    }, []);
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <div className="hidden for now">
                <UserStatusDropdown />
            </div>
            <div className="hidden sm:flex">
                <RoomHeader />
            </div>
            <div className="mx-auto max-w-[540px]">
                <div className="flex flex-col justify-between items-center mx-4 sm:mx-0">
                    {/* <CompletePhrase /> */}
                    <Translate />
                </div>
            </div>
            <RoomFooter />
        </div>
    );
};
