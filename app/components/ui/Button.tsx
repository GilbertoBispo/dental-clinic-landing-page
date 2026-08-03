import { ReactNode } from "react";

interface typeButtonProps {
    children: ReactNode
}

export default function Button({ children }: typeButtonProps) {
    return (
        <button className="bg-(--primary) p-3 rounded-[5px] text-white text-shadow-md hover:bg-(--light) cursor-pointer w-fit hover:p-4.5 hover: transition-all duration-400 delay-100 shadow-lg">
            { children }
        </button>
    );
}