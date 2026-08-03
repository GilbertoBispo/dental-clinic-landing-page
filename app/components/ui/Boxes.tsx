import { ReactNode } from "react";

interface typeBoxChildren {
    children: ReactNode;
    className: string
}

export default function Boxes({ children, className }: typeBoxChildren) {
    return (
        <div className={`bg-background shadow-lg h-16 w-full ${className}`}>
            { children }
        </div>
    );
}