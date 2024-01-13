import {TopCard} from "../Cards/TopCard";

const top5 = [
    {
        name: "Luis Suárez",
        score: 2000,
    },
    {
        name: "Lionel Andres Messi",
        score: 1200,
    },
    {
        name: "Cristiano Ronaldo",
        score: 1930,
    },
    {
        name: "Pedro Pascal",
        score: 1000,
    },
    {
        name: "Ronaldhino",
        score: 200,
    },
];

export const SideBarRight = () => {
    return (
        <aside
            id="cta-button-sidebar"
            className={`absolute sm:fixed top-[90px] right-0 z-40 lg:w-[340px] bottom-0 transition-transform`}
            aria-label="Sidebar"
        >
            <div className="h-full px-3 py-4 overflow-y-auto">
                <ul className="h-full space-y-2 font-medium px-4 pt-8">
                    <li className="flex flex-col items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-stars text-yellow-500 animate-bounce"
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
                            <path d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                            <path d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                            <path d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
                        </svg>
                        <p className="mb-2 text-sm">TOP BEST COMPETITORS</p>
                    </li>
                    {top5.map((user, index) => (
                        <TopCard
                            position={index + 1}
                            name={user.name}
                            score={user.score}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    );
};
