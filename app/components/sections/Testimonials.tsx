'use client';

import { motion } from 'framer-motion';
import Cards from "../ui/Cards";

export default function Testimonials(){
    
    const testimonials = [
        {
            id: 1,
            rating: 5,
            depoimento: "State-of-the-art facility and top-tier professionalism. My dental implant looks and feels 100% natural. They truly restored my confidence to eat and smile again.",
            nome: "David Brown",
            procedimento: "Dental Implants",
            avatar: "avatar1"
        },
        {
            id: 2,
            rating: 5,
            depoimento: "Getting my clear aligners here was the best decision. The whole process was smooth, transparent, and the results exceeded my expectations. I can't stop smiling!",
            nome: "Sophia Wang",
            procedimento: "Modern Orthodontics",
            avatar: "avatar2"
        },
        {
            id: 3,
            rating: 5,
            depoimento: "I used to get terrible anxiety before any dental appointment, but the team here completely changed that. They were so gentle, patient, and made sure I was comfortable every second of the way.",
            nome: "Emily Chen",
            procedimento: "General Checkup & Care",
            avatar: "avatar3"
        },
        {
            id: 4,
            rating: 5,
            depoimento: "The teeth whitening results blew me away! My smile is significantly brighter, and I experienced zero sensitivity afterward. Easily the best dental experience I've ever had.",
            nome: "Marcus Vance",
            procedimento: "Teeth Whitening",
            avatar: "avatar4"
        }
    ];
    
    return(
        <section className="flex overflow-scroll h-fit py-5 no-scrollbar relative bg-image bg-repeat bg-cover bg-bottom justify-center">
                <div className="no-scrollbar px-5 gap-5 flex overflow-scroll w-fit lg:grid lg:grid-cols-2 lg:gap-5">
                    {testimonials.map((testimonial, index) => {
                        const depoimento = testimonial.depoimento;
                        const nome = testimonial.nome;
                        const procedimento = testimonial.procedimento;
                        const rating = testimonial.rating;
                        const avatar = testimonial.avatar;
                        const id = testimonial.id;
                        return(
                            // utiliza a biblioteca framer-motion para a criação da animação de Scroll Reveal
                            <motion.div
                                className="flex flex-col items-center w-fit h-full lg:w-fit "
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{once: true, margin: "-15px"}}
                                transition={{duration: 0.2, delay: 0.3}}>
                                <Cards className="flex flex-col p-5 gap-5 text-shadow-lg w-[80vw] h-full bg-white/40 backdrop-blur-md z-10 border border-white lg:w-92.5 lg:mx-0">
                                    <div className="flex flex-col justify-between items-center gap-2">
                                        <img className="w-20 rounded-full" src={`${avatar}.jpg`} alt="sparkles icon"/>
                                        <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>{nome}</strong></h3>
                                        <p>{procedimento}</p>
                                    </div>
                                    <p className="text-lg">{depoimento}</p>
                                    <div>{"⭐".repeat(testimonial.rating)}</div>
                                </Cards>
                            </motion.div>
                        );
                    })}
                </div>
        </section>
    );
}