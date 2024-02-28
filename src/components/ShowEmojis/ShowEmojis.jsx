import {useEffect, useState} from "react";

const icons = ["⛔", "🚧", "😂", "💀"];

export const ShowEmojis = ({iconNumber, setIconNumber}) => {
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        setShowAnimation(true);

        const idTimeout = setTimeout(() => {
            setShowAnimation(false);
            setIconNumber(undefined);
            clearTimeout(idTimeout);
        }, 2000);

        return () => {
            clearTimeout(idTimeout);
        };
    }, [iconNumber]);

    console.log(iconNumber, showAnimation);

    return (
        <>
            {iconNumber !== undefined && showAnimation && (
                <div
                    className={`absolute animate-slide-in-bottom left-10 bottom-40 z-20 text-6xl`}
                >
                    {icons[iconNumber]}
                </div>
            )}
        </>
    );
};
