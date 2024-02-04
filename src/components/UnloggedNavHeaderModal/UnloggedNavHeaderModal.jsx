import {Link} from "react-router-dom";

export const UnloggedNavHeaderModal = ({hideModal}) => {
    return (
        <div className="fixed flex justify-between items-center min-h-screen left-0 right-0 bg-red-600 text-white z-10">
            <div className="flex flex-col justify-start w-full h-screen px-4 py-6">
                <div className="self-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={hideModal}
                        className="icon icon-tabler icon-tabler-x w-7 -ml-1 cursor-pointer"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex flex-col items-start text-xl space-y-12 font-medium mt-12">
                    <Link to="/home">Home</Link>
                    <Link to="/information">Information</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/about-us">About us</Link>
                    <div className="min-w-full mt-4 pt-4 border-t">
                        <Link className="-mt-4" to="/signin">
                            Sign In
                        </Link>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};
