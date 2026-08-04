import { ReactNode } from "react";

interface typeButtonProps {
    children: ReactNode,
    className: string
}

export default function Button({ children, className }: typeButtonProps) {
    return (
        <button className={`${className} bg-(--primary) p-3 rounded-[5px] text-white text-shadow-md hover:bg-(--light) cursor-pointer w-fit hover:p-4.5 hover: transition-all duration-400 delay-100 shadow-lg`}>
            { children }
        </button>
    );
}