'use client';

import Cards from "../ui/Cards";
import { motion } from "framer-motion";

export default function Services() {

    // array contendo todas as informações dos cards
    const SERVICES = [
        {
            icon: "sparkles",
            title: 'Professional Teeth Whitening',
            description: 'Fast, safe, and effective cosmetic whitening treatments that remove deep stains and brighten your smile by up to several shades.',
        },
        {
            icon: "shield-check",
            title: 'General & Preventive Care',
            description: 'Comprehensive checkups, professional cleanings, and preventive treatments to keep your smile healthy and plaque-free for life.',
        },
        {
            icon: "smile",
            title: 'Modern Orthodontics',
            description: 'Discrete clear aligners and modern braces tailored to align your teeth comfortably, giving you a perfectly balanced smile.',
        },
        {
            icon: "stethoscope",
            title: 'Dental Implants',
            description: 'Permanent, natural-looking replacement solutions engineered to restore your missing teeth, natural chewing function, and confidence.',
        },
        {
            icon: "baby",
            title: 'Pediatric Dental Care',
            description: 'Gentle, fear-free dental experiences specially crafted for children, ensuring their growing smiles stay healthy and strong.',
        },
        {
            icon: "cross",
            title: 'Emergency Dental Care',
            description: 'Immediate, compassionate relief for sudden toothache, broken teeth, or unexpected dental emergencies when you need it most.',
        },
    ];

    return (
        <section className="flex flex-col items-center gap-5 my-5 w-full">
            <div className="text-center text-shadow-lg">
                <h2 className="font-black text-3xl">Our Services</h2>
                <p className="font-semibold">High-Quality Care for Your Smile</p>
            </div>

            {/* utiliza o método .map() para renderizar cada card */}
            {SERVICES.map((service, index) => {

                // cada atributo do objeto SERVICES vira uma constante
                const icon = service.icon;
                const title = service.title;
                const description = service.description;

                return(
                    // utiliza a biblioteca framer-motion para a criação da animação de Scroll Reveal
                    <motion.div
                        className="flex flex-col items-center gap-5"
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-15px"}}
                        transition={{duration: 0.4, delay: 0.3}}>

                        <Cards className="flex flex-col p-5 gap-5 text-shadow-lg w-[90%]">
                            <div className="flex justify-between items-center">
                                <img className="w-20" src={`${icon}.svg`} alt="sparkles icon"/>
                                <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>{title}</strong></h3>
                            </div>
                            <p className="text-lg">{description}</p>
                            <a className="cursor-pointer underline text-(--light) w-fit py-2 px-5">Learn More →</a>
                        </Cards>

                    </motion.div>
                );
            })}
        </section>
    );
}