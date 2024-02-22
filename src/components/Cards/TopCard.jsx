export const TopCard = ({position, name, score}) => {
    return (
        <li className="px-0 py-2 rounded-xl bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 min-w-[290px] animate-fade-in">
            <div className="flex items-center justify-between text-xl">
                <div className="flex items-center">
                    <span className="px-5 text-base font-bold w-6 h-6 flex items-center justify-center">
                        {position}
                    </span>
                    <div className="flex space-x-2 items-center justify-between">
                        <div className="capitalize bg-red-500 text-white rounded-xl group-hover:shadow-xl group-hover:shadow-gray-300 w-[42px] h-[42px] flex justify-center items-center font-bold text-2xl">
                            {name.slice(0, 2)}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-base truncate ...">
                                {name}
                            </p>
                            <p className="text-gray-500 text-xs">{score}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
