/*const stats = [
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
];*/

import {TextField} from "@radix-ui/themes";

export const UserStats = ({id, category, value}) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="font-bold text-gray-500 text-sm">
                {category}
            </label>
            <TextField.Input
                className="py-6 px-3 focus:shadow-xl bg-green-200 focus:shadow-green-100 border focus:border-green-500 cursor-not-allowed"
                value={value}
                type="text"
                color="red"
                id={id}
                variant="soft"
                radius="large"
                disabled
            />
        </div>
    );
};
