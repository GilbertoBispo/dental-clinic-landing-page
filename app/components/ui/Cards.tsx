import { ReactNode } from "react";

interface typeCardProps {
    children: ReactNode,
    className: string
}

export default function Card({ children, className }: typeCardProps) {
    return (
        <div className={`bg-white w-[90%] h-fit rounded-[10px] shadow-lg ${className}`}>
            { children }
        </div>
    );
}