'use client';

import Cards from "../ui/Cards";
import { motion } from "framer-motion";

export default function Reasons() {

    const whyChooseUsFeatures = [
        {
            id: 1,
            iconName: "microscope",
            title: "State-of-the-Art Tech",
            description: "Advanced 3D digital imaging and laser treatments for faster, more precise, and virtually painless procedures."
        },
        {
            id: 2,
            iconName: "heart",
            title: "Anxiety-Free Care",
            description: "Relax in a warm, welcoming environment with gentle techniques designed specifically for nervous patients."
        },
        {
            id: 3,
            iconName: "zap",
            title: "Same-Day Emergency",
            description: "Dental emergencies don't wait. We offer same-day appointments and flexible hours to fit your busy schedule."
        },
        {
            id: 4,
            iconName: "dollar-sign",
            title: "Transparent Pricing",
            description: "No hidden fees. We accept most major insurance plans and offer flexible financing options for every budget."
        }
    ];

    return(
        <section className="flex items-center gap-5 overflow-scroll w-full h-fit no-scrollbar justify-center lg:px-0">
            <div className="flex gap-5 overflow-scroll px-5 no-scrollbar lg:grid lg:grid-cols-2 lg:gap-5 lg:py-5">
                {
                    whyChooseUsFeatures.map((features, index) => {
                        const title = features.title;
                        const description = features.description;
                        const icon = features.iconName;
                        return (
                            <motion.div className="flex flex-col items-center py-5 lg:py-0 lg:w-fit lg:h-fit"
                                key={index}
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                viewport={{once: true, margin: "-15px"}}
                                transition={{duration: 0.4, delay: 0.3}}>
                                <Cards className="flex flex-col p-5 gap-5 text-shadow-lg w-[80vw] h-80 md:w-[45vw] lg:w-[45vw] lg:h-fit">
                                    <div className="flex justify-between items-center">
                                        <img className="w-20" src={`${icon}.svg`} alt="sparkles icon"/>
                                        <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>{title}</strong></h3>
                                    </div>
                                    <p className="text-lg">{description}</p>
                                </Cards>
                            </motion.div>
                        );
                    })
                }
            </div>
        </section>
    );
}