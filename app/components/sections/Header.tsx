'use client';

import Boxes from "../ui/Boxes";
import { useState, useRef } from "react";

export default function Header() {

    // utiliza o hook useState pra controlar o estado do botão
    const [isActive, setActive] = useState<boolean>(false);
    // utiliza o rook useRef para pegar e armazenar informações de elementos HTML em questão
    const button = useRef<HTMLButtonElement>(null);
    
    // função que é disparada ao clicar no botão de menu
    const handleActive = () => {
        // seleciona todos os elementos <span> de dentro do botão
        const span = button.current?.querySelectorAll("span");

        // se o botão for clicado...
        if(button.current) {

            // inverte o valor da constante "isActive", atribui à constante "estado" e chama a função "setActive" passando o "estado" como atributo
            const estado = !isActive;
            setActive(estado);
        }
    }

    return (
        <div>
            <Boxes className="flex lg:justify-between">
                {/* Logo */}
                <img src="/logotype2.png" alt="Dental Clinic logotype" className="w-40 h-16"/>

                {/* Botão de menu */}
                <div className="w-full flex items-center justify-end px-2.5 lg:hidden">
                    <button ref={button} onClick={handleActive} className="w-10 h-10 bg- flex flex-col gap-2 justify-center items-center">
                        <span className={`w-8 h-0.5 inline-block bg-(--dark) duration-200 ${isActive ? 'bg-(--dark) rotate-45 translate-y-2 duration-200' : 'bg-(--dark)'}`}></span>
                        <span className={`w-8 h-0.5 inline-block bg-(--dark) duration-200 ${isActive ? 'opacity-0' : 'bg-(--dark)'}`}></span>
                        <span className={`w-8 h-0.5 inline-block bg-(--dark) duration-200 ${isActive ? 'bg-(--dark) -rotate-45 -translate-y-3 duration-200' : 'bg-(--dark)'}`}></span>
                    </button>
                </div>  

                {/* Links do menu mobile */}
                <div className={`fixed z-1 ${isActive ? 'shadow-lg flex flex-col items-center justify-start fixed top-0 left-0 h-full w-[85%] bg-white/30 backdrop-blur-sm transition-all duration-500 translate-x-0' : 'flex flex-col items-center justify-start fixed top-0 left-0 h-full w-[85%] bg-white/30 backdrop-blur-sm transition-all duration-500 -translate-x-full'}`}>
                    <nav className="h-full">
                        <ul className="flex flex-col gap-5 items-center font-bold text-xl">
                            <li className="p-5 w-full text-center"><a href="">Home</a></li>
                            <li className="p-5 w-full text-center"><a href="">About Us</a></li>
                            <li className="p-5 w-full text-center"><a href="">Services</a></li>
                            <li className="p-5 w-full text-center"><a href="">Contact</a></li>
                            <li className="p-5 w-full text-center"><a href="">Schedule an appointment</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Links do menu desktop */}
                <div className="hidden lg:block h-full mx-5 w-120">
                    <nav className="h-full">
                        <ul className="flex items-center font-bold text-lg h-full gap-5">
                            <li className="w-full text-center cursor-pointer hover:text-(--light) transition-all duration-250 delay-100 ease-in-out"><a href="">Home</a></li>
                            <li className="w-full text-center cursor-pointer hover:text-(--light) transition-all duration-250 delay-100 ease-in-out"><a href="">About Us</a></li>
                            <li className="w-full text-center cursor-pointer hover:text-(--light) transition-all duration-250 delay-100 ease-in-out"><a href="">Services</a></li>
                            <li className="w-full text-center cursor-pointer hover:text-(--light) transition-all duration-250 delay-100 ease-in-out"><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </Boxes>
        </div>
    );
}