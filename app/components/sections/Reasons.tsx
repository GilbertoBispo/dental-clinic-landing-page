'use client';

import Cards from "../ui/Cards";
import { motion } from "framer-motion";

export default function Reasons() {

    const whyChooseUsFeatures = [
        {
            id: 1,
            iconName: "microscope", // Import do lucide-react
            title: "State-of-the-Art Tech",
            description: "Advanced 3D digital imaging and laser treatments for faster, more precise, and virtually painless procedures."
        },
        {
            id: 2,
            iconName: "heart", // Import do lucide-react
            title: "Anxiety-Free Care",
            description: "Relax in a warm, welcoming environment with gentle techniques designed specifically for nervous patients."
        },
        {
            id: 3,
            iconName: "zap", // Import do lucide-react
            title: "Same-Day Emergency",
            description: "Dental emergencies don't wait. We offer same-day appointments and flexible hours to fit your busy schedule."
        },
        {
            id: 4,
            iconName: "dollar-sign", // Import do lucide-react
            title: "Transparent Pricing",
            description: "No hidden fees. We accept most major insurance plans and offer flexible financing options for every budget."
        }
    ];

    return(
        <section className="flex items-center my-5 overflow-scroll w-full h-fit no-scrollbar">
            {
                
                whyChooseUsFeatures.map((features, index) => {
                    const title = features.title;
                    const description = features.description;
                    const icon = features.iconName;

                    return (
                        <motion.div className="flex flex-col items-center mx-5"
                            key={index}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true, margin: "-15px"}}
                            transition={{duration: 0.4, delay: 0.3}}>

                            <Cards className="flex flex-col p-5 gap-5 text-shadow-lg w-[80vw] h-80">
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
        </section>
    );
}