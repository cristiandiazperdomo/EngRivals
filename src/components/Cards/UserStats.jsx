const stats = [
    {
        icon: swords,
        topic: "Total Battles",
        amount: 10,
    },
    {
        icon: swords,
        topic: "Total Battles",
        amount: 10,
    },
    {
        icon: swords,
        topic: "Total Battles",
        amount: 10,
    },
];

export const UserStats = ({color}) => {
    return (
        <div className="bg-red-100 px-4 py-2 [calc(100%-16px)] md:w-[calc(50%-16px)] xl:w-[calc(25%-16px)]">
            <div className="flex">
                <div className="flex items-center bg-white max-h-[100%] overflow-hidden rounded-md"></div>
                <div className="font-bold ml-2">
                    <div className="text-base">10</div>
                    <div className="font-light">Total Courses</div>
                </div>
            </div>
        </div>
    );
};
