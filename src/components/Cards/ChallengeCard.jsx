export const ChallengeCard = ({category, videoUrl}) => {
    return (
        <div className="relative w-[calc(100%-16px)] md:w-[calc(50%-16px)] xl:w-[calc(25%-16px)] rounded-xl group cursor-pointer">
            <video
                className="relative rounded-xl z-0 h-full"
                autoPlay
                muted
                loop
                src={videoUrl}
            ></video>
            <div className="top-0 absolute w-full h-full flex">
                <div className="relative w-full h-full">
                    <div className="absolute">
                        <p className="text-white font-bold text-2xl mt-4 ml-4 z-10">
                            {category}
                        </p>
                    </div>
                    <div className="transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-transparent to-red-800 bg-opacity-10 z-10 rounded-xl text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-users"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        <p className="font-bold">Find Opponent</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
