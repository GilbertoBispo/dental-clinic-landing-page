'use client';

import Boxes from "../ui/Boxes";
import { useState, useRef } from "react";

export default function Header() {

    // utiliza o rook useRef para pegar e armazenar informações de elementos HTML em questão
    const [isActive, setActive] = useState<boolean>(false);
    const button = useRef<HTMLButtonElement>(null);
    
    const handleActive = () => {
        const span = button.current?.querySelectorAll("span");

        if(button.current) {
            const estado = !isActive;
            setActive(estado);

            span?.forEach(i => {
                i.style.backgroundColor = estado ? "var(--dark)" : "#0f2847";
            });
        }
    }

    return (
        <header>
            <Boxes className="flex">
                <img src="/logotype2.png" alt="Dental Clinic logotype" className="w-40 h-16"/>
                <div className="w-full flex items-center justify-end px-2.5">
                    <button ref={button} onClick={handleActive} className="w-10 h-10 bg- flex flex-col gap-2 justify-center items-center">
                        <span className={`w-8 h-0.5 inline-block bg-(--dark) duration-200 ${isActive ? 'bg-white rotate-45 translate-y-2 duration-200' : 'bg-(--dark)'}`}></span>
                        <span className={`w-8 h-0.5 inline-block bg-(--dark) duration-200 ${isActive ? 'opacity-0' : 'bg-(--dark)'}`}></span>
                        <span className={`w-8 h-0.5 inline-block bg-(--dark) duration-200 ${isActive ? 'bg-white -rotate-45 -translate-y-3 duration-200' : 'bg-(--dark)'}`}></span>
                    </button>
                </div>

                <div className="">

                </div>
            </Boxes>
        </header>
    );
}