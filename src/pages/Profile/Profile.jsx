import {Button, TextField} from "@radix-ui/themes";
import {UserStats} from "../../components/Cards/UserStats";
import {SideBarLeft} from "../../components/SideBarLeft/SideBarLeft";
import {useContext} from "react";
import {MyContext} from "../../context/AppContext";

export const Profile = () => {
    const {isSideBarActive, toggleSideBar} = useContext(MyContext);

    return (
        <div>
            <header className="h-[120px] flex items-center">
                <div
                    className={`container mx-auto ${
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
                            <span className="text-gray-500 text-xs">
                                Joined at: 21/04/03
                            </span>
                            <Button
                                color="red"
                                variant="soft"
                                size="4"
                                className="p-3 text-sm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-trash"
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
                                    <path d="M4 7l16 0" />
                                    <path d="M10 11l0 6" />
                                    <path d="M14 11l0 6" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>{" "}
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
            <SideBarLeft />
            <div
                className={`transition-all duration-500 min-h-screen ${
                    isSideBarActive ? "ml-0 sm:ml-64" : "container mx-auto"
                }`}
            >
                <div className="mx-4">
                    <div className="">
                        <div className="grid grid-cols-2 gap-0 lg:gap-8 xl:gap-12">
                            <div>
                                <div className="space-y-4 w-100">
                                    <p className="text-sm uppercase text-gray-500">
                                        Profile Image
                                    </p>
                                    <div className="flex justify-center items-center w-full bg-red-50 h-100 h-[400px] rounded-xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                            className="rounded-xl group-hover:shadow-xl group-hover:shadow-gray-300 w-[300px]"
                                            alt="profile"
                                        />
                                    </div>
                                    <Button
                                        color="red"
                                        variant="ghost"
                                        className="w-[calc(100%-16px)] mx-auto font-semibold py-4"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-photo"
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
                                    <div className="grid grid-cols-2 my-8 space-x-4">
                                        <Button
                                            className="p-6"
                                            color="gray"
                                            variant="solid"
                                            radius="full"
                                            highContrast
                                        >
                                            Save Changes
                                        </Button>
                                        <Button
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
                            <div className="">
                                <div className="space-y-4 w-100">
                                    <p className="text-sm uppercase text-gray-500">
                                        English Level
                                    </p>
                                    {["A1", "A2", "B1", "B2", "C1", "C2"].map(
                                        (level) => (
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
                                        )
                                    )}
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
