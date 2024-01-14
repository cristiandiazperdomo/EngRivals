import {useContext, useState} from "react";
import {Button, TextField} from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import {UserStats} from "../../components/Cards/UserStats";
import {SideBarLeft} from "../../components/SideBarLeft/SideBarLeft";
import {MyContext} from "../../context/AppContext";
import {ImportantModal} from "../../components/Modals/ImportantModal";

export const Profile = () => {
    const {isSideBarActive, toggleSideBar} = useContext(MyContext);
    const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const handleEditProfile = () => {
        setEditMode(!editMode);
    };

    const handleSaveNewInfo = () => {
        alert("Savedddd!!!");
    };

    return (
        <div>
            <header className="h-[104px] flex items-center">
                <div
                    className={`transition-all duration-500 w-full ${
                        isSideBarActive ? "ml-0 sm:ml-64" : "container mx-auto"
                    }`}
                >
                    <div className="mx-4 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
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
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="rounded-full ml-0.5 w-11 group-hover:shadow-xl group-hover:shadow-gray-300"
                                alt="profile"
                            />
                            <span className="text-xl">Tim Cook</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <p className="flex flex-col sm:flex-row text-gray-500 text-xs sm:space-x-1">
                                <span>Joined at:</span>
                                <span>21/04/03</span>
                            </p>
                            <Button
                                color="red"
                                variant="soft"
                                size="4"
                                className={`p-3 text-sm ${
                                    editMode ? "" : "hidden"
                                }`}
                                onClick={() => setShowDeleteAccountModal(true)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-trash"
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
                                    <path d="M4 7l16 0" />
                                    <path d="M10 11l0 6" />
                                    <path d="M14 11l0 6" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>{" "}
                                <span className="hidden sm:block">Delete</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            {showDeleteAccountModal && (
                <ImportantModal
                    hideModal={() => setShowDeleteAccountModal(false)}
                />
            )}
            <SideBarLeft />
            <div
                className={`transition-all duration-500 min-h-screen py-4 ${
                    isSideBarActive ? "ml-0 sm:ml-64" : "container mx-auto"
                }`}
            >
                <div className="mx-4">
                    <div className="">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 xl:gap-12">
                            <div>
                                <div className="space-y-4 w-100">
                                    <p className="text-sm uppercase text-gray-500">
                                        Profile Image
                                    </p>
                                    <div className="relative flex justify-center items-center w-full bg-red-50 h-[400px] rounded-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                            className="rounded-xl group-hover:shadow-xl group-hover:shadow-gray-300 w-[300px]"
                                            alt="profile"
                                        />
                                        <div className="absolute top-4 right-8">
                                            <Tooltip.Provider>
                                                <Tooltip.Root>
                                                    <Tooltip.Trigger asChild>
                                                        {!editMode && (
                                                            <button
                                                                onClick={
                                                                    handleEditProfile
                                                                }
                                                                className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-red-200 outline-none shadow-none"
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    class="icon icon-tabler icon-tabler-pencil"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="2"
                                                                    stroke="currentColor"
                                                                    fill="none"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                >
                                                                    <path
                                                                        stroke="none"
                                                                        d="M0 0h24v24H0z"
                                                                        fill="none"
                                                                    />
                                                                    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                                                    <path d="M13.5 6.5l4 4" />
                                                                </svg>
                                                            </button>
                                                        )}
                                                    </Tooltip.Trigger>
                                                    <Tooltip.Portal>
                                                        <Tooltip.Content
                                                            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                                                            sideOffset={5}
                                                        >
                                                            Activate editing
                                                            mode
                                                            <Tooltip.Arrow className="fill-white" />
                                                        </Tooltip.Content>
                                                    </Tooltip.Portal>
                                                </Tooltip.Root>
                                            </Tooltip.Provider>
                                        </div>
                                    </div>
                                    <Button
                                        color="red"
                                        variant="ghost"
                                        className={`${
                                            editMode ? "" : "hidden"
                                        } w-[calc(100%-16px)] mx-auto font-semibold py-4`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-photo"
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
                                            <path d="M15 8h.01" />
                                            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
                                            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
                                            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
                                        </svg>
                                        Change Profile Image
                                    </Button>
                                </div>
                                <div className="mt-10 space-y-4">
                                    <p className="text-sm uppercase text-gray-500">
                                        Employee Details
                                    </p>
                                    <div className="space-y-1 w-100">
                                        <label
                                            htmlFor="name"
                                            className="font-bold text-gray-500 text-sm"
                                        >
                                            First Name
                                        </label>
                                        <TextField.Input
                                            className="py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500 cursor-not-allowed"
                                            defaultValue="Tim Cook"
                                            type="text"
                                            color="green"
                                            id="name"
                                            variant="soft"
                                            radius="large"
                                            disabled
                                        />
                                    </div>
                                    <div className="space-y-1 w-100">
                                        <label
                                            htmlFor="name"
                                            className="font-bold text-gray-500 text-sm"
                                        >
                                            Email
                                        </label>
                                        <TextField.Input
                                            className="py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500 cursor-not-allowed"
                                            defaultValue="timcook@gmail.com"
                                            type="email"
                                            color="green"
                                            id="name"
                                            variant="soft"
                                            radius="large"
                                            disabled
                                        />
                                    </div>
                                    <div className="space-y-1 w-100">
                                        <label
                                            htmlFor="name"
                                            className="font-bold text-gray-500 text-sm"
                                        >
                                            Birthdate
                                        </label>
                                        <TextField.Input
                                            className="py-6 px-3 focus:shadow-xl focus:shadow-green-100 border focus:border-green-500 cursor-not-allowed"
                                            defaultValue="2004-05-02"
                                            type="date"
                                            color="green"
                                            id="name"
                                            variant="soft"
                                            radius="large"
                                            disabled
                                        />
                                    </div>
                                    <div
                                        className={`${
                                            editMode ? "" : "hidden"
                                        } grid grid-cols-2 my-8 space-x-4`}
                                    >
                                        <Button
                                            onClick={handleSaveNewInfo}
                                            className="p-6"
                                            color="gray"
                                            variant="solid"
                                            radius="full"
                                            highContrast
                                        >
                                            Save Changes
                                        </Button>
                                        <Button
                                            onClick={handleEditProfile}
                                            className="p-6"
                                            color="gray"
                                            variant="soft"
                                            radius="full"
                                            highContrast
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8 lg:my-0">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="space-y-4 w-100 mb-4 lg:mb-0">
                                        <p className="text-sm uppercase text-gray-500">
                                            English Level
                                        </p>
                                        {[
                                            "A1",
                                            "A2",
                                            "B1",
                                            "B2",
                                            "C1",
                                            "C2",
                                        ].map((level) => (
                                            <div className="space-y-1 ">
                                                <TextField.Input
                                                    className={`py-6 px-3 w-full focus:shadow-xl ${
                                                        level === "B1"
                                                            ? "bg-green-200"
                                                            : ""
                                                    } focus:shadow-green-100 border focus:border-green-500 cursor-not-allowed`}
                                                    defaultValue={level}
                                                    type="text"
                                                    color="green"
                                                    id="name"
                                                    variant="soft"
                                                    radius="large"
                                                    disabled
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="space-y-4 w-full">
                                        <p className="text-sm uppercase text-gray-500">
                                            Statistics
                                        </p>
                                        <div className="space-y-2">
                                            <UserStats
                                                category="Games Played"
                                                id="games"
                                                value={10}
                                            />
                                            <UserStats
                                                category="Win rate"
                                                id="win-rate"
                                                value="59%"
                                            />
                                            <UserStats
                                                category="Score"
                                                id="amount-of-xp"
                                                value="1248"
                                            />
                                            <UserStats
                                                category="Place in the Top"
                                                id="place-in-the-top"
                                                value="150"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
