import "./PieTimer.css";

export const PieTimer = ({seconds}) => {
    return (
        <div>
            <div className="triangle relative">
                <span className="fixed text-white text-4xl font-semibold w-full h-full">
                    {seconds}
                </span>
            </div>

            <div className="triangle-shadow"></div>
        </div>
    );
};
