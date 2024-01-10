export const PhraseCard = () => {
    return (
        <div className="text-center flex justify-center md:max-w-[600px]">
            <svg
                id="visual"
                className="relative w-full rounded-3xl rounded-t-xl"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <path
                    d="M0 115L82 97L164 103L245 109L327 115L409 115L491 103L573 115L655 103L736 115L818 115L900 109L900 0L818 0L736 0L655 0L573 0L491 0L409 0L327 0L245 0L164 0L82 0L0 0Z"
                    fill="#ffc927"
                ></path>
                <path
                    d="M0 193L82 175L164 193L245 193L327 193L409 193L491 193L573 193L655 193L736 205L818 193L900 187L900 107L818 113L736 113L655 101L573 113L491 101L409 113L327 113L245 107L164 101L82 95L0 113Z"
                    fill="#f9c321"
                ></path>
                <path
                    d="M0 361L82 343L164 367L245 367L327 367L409 355L491 367L573 355L655 361L736 367L818 361L900 343L900 185L818 191L736 203L655 191L573 191L491 191L409 191L327 191L245 191L164 191L82 173L0 191Z"
                    fill="#f4be1a"
                ></path>
                <path
                    d="M0 433L82 415L164 433L245 433L327 439L409 421L491 439L573 427L655 433L736 433L818 433L900 415L900 341L818 359L736 365L655 359L573 353L491 365L409 353L327 365L245 365L164 365L82 341L0 359Z"
                    fill="#efb812"
                ></path>
                <path
                    d="M0 601L82 601L164 601L245 601L327 601L409 601L491 601L573 601L655 601L736 601L818 601L900 601L900 413L818 431L736 431L655 431L573 425L491 437L409 419L327 437L245 431L164 431L82 413L0 431Z"
                    fill="#eab308"
                ></path>
            </svg>
            <div className="flex flex-col items-start absolute w-100 mx-16 sm:max-w-[500px]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user-filled z-20 ml-auto mt-4 mr-2 p-2 bg-yellow-100 rounded-xl text-yellow-600 hidden sm:block"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                        strokeWidth="0"
                        fill="currentColor"
                    />
                    <path
                        d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z"
                        strokeWidth="0"
                        fill="currentColor"
                    />
                </svg>
                <p className="text-xl font-bold flex mt-4 sm:mt-2 mx-auto sm:mx-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-quote rotate-180"
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
                        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                    </svg>
                    Where is the closest parks here in New York, USA?
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-quote mt-auto"
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
                        <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                        <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                    </svg>
                </p>
            </div>
        </div>
    );
};
