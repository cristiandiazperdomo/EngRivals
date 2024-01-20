import {Button} from "@radix-ui/themes";
import {RoomBarProgress} from "../RoomBarProgress/RoomBarProgress";
import {Timer} from "../Timer/Timer";

export const RoomFooter = () => {
    return (
        <footer className="bg-white border-t flex justify-center items-center">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-between w-full mx-4 lg:mx-0 md:w-[800px] lg:w-[1000px] xl:w-[1200px] py-4 sm:py-12">
                <Button
                    size="4"
                    color="green"
                    variant="outline"
                    className="hidden sm:flex border-b-4 text-black w-[140px] sm:w-[160px] hover:bg-green-100"
                >
                    Skip
                </Button>
                <Timer />
                <div className="sm:flex sm:hidden">
                    <RoomBarProgress />
                </div>
                <Button
                    size="4"
                    color="green"
                    variant="soft"
                    className="border-b-4 text-black w-full sm:w-[160px] bg-green-200 hover:bg-green-300 transition-all duration-200"
                >
                    Submit
                </Button>
            </div>
        </footer>
    );
};
