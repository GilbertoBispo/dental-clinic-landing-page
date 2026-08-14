'use client';

import { motion } from "framer-motion";

export default function ContactAndLocation() {

    // array com as informações dos cards
    const cards = [
        {
            icon: "clock",
            title: "Working Hours",
            info1: "Monday – Friday: 8:00 AM – 6:00 PM",
            info2: "Saturday: 9:00 AM – 2:00 PM",
            info3: "Sunday: Closed (Emergency Appointments Only)"
        },
        {
            icon: "phone",
            title: "Get in Touch",
            info1: "+1 (555) 234-5678",
            info2: "+1 (555) 987-6543",
            info3: "contact@dentalclinic.com"
        },
        {
            icon: "map-pin",
            title: "Visit Us",
            info1: "123 Health Avenue, Suite 400",
            info2: "Medical Center District, NY 10001",
            info3: "Free parking & wheelchair accessible"
        }
    ];

    return (
        <section className="flex flex-col items-center p-5 gap-5">
            <h2 className="text-3xl">Contact & Location</h2>

            {/* renderiza os cards usando o método Array.map() utilizando as informações */}
            <div className="flex flex-col items-center gap-5 lg:grid lg:grid-cols-2">
                {cards.map((card, index) => {
                    // criando constantes com os atributos
                    const icon = card.icon
                    const title = card.title
                    const info1 = card.info1
                    const info2 = card.info2
                    const info3 = card.info3

                    // verifica se é o último card
                    const isLast = index === cards.length - 1;
                    
                    return (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 50}}
                            viewport={{once: true, margin: "-50px"}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.4, delay: 0.3}}
                            className={`w-fit h-fit ${isLast ? 'lg:col-span-2 lg:justify-self-center' : '' }`}
                        >
                            <div className="bg-white flex flex-col gap-5 w-[80vw] p-5 rounded-lg shadow-lg text-shadow-lg lg:w-102.5">
                                <h2 className="text-xl font-bold flex gap-2.5"><img src={`/${icon}.svg`} alt="information card icon" />{title}</h2>
                                <p>{info1}</p>
                                <p>{info2}</p>
                                <p>{info3}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
}