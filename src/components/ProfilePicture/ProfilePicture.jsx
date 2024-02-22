export const ProfilePicture = ({name}) => {
    return (
        <div className="capitalize bg-red-400 text-white rounded-xl group-hover:shadow-xl group-hover:shadow-gray-300 w-[44px] h-[44px] flex justify-center items-center font-bold text-2xl">
            {name?.slice(0, 2)}
        </div>
    );
};
