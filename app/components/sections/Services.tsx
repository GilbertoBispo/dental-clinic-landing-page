'use client';

import Cards from "../ui/Cards";

export default function Services() {
    return (
        <section className="flex flex-col items-center gap-5 my-5">
            <div className="text-center text-shadow-lg">
                <h2 className="font-black text-3xl">Our Services</h2>
                <p className="font-semibold">High-Quality Care for Your Smile</p>
            </div>

            {/* Cards */}
            <Cards className="flex flex-col p-5 gap-5 text-shadow-lg ">
                <div className="flex justify-between items-center">
                    <img className="w-20" src="/sparkles.svg" alt="sparkles icon"/>
                    <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>Professional Teeth Whitening</strong></h3>
                </div>

                <p className="text-lg">Fast, safe, and effective cosmetic whitening treatments that remove deep stains and brighten your smile by up to several shades.</p>

                <a className="cursor-pointer underline text-(--light) w-fit py-2 px-5">Learn More →</a>
            </Cards>

            <Cards className="flex flex-col p-5 gap-5 text-shadow-lg">
                <div className="flex justify-between items-center">
                    <img className="w-20" src="/shield-check.svg" alt="sparkles icon"/>
                    <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20 mx-1"><strong>General & Preventive Care</strong></h3>
                </div>

                <p className="text-lg">Comprehensive checkups, professional cleanings, and preventive treatments to keep your smile healthy and plaque-free for life.</p>
                
                <a className="cursor-pointer underline text-(--light) w-fit py-2 px-5">Learn More →</a>
            </Cards>

            <Cards className="flex flex-col p-5 gap-5 text-shadow-lg">
                <div className="flex justify-between items-center">
                    <img className="w-20" src="/smile.svg" alt="sparkles icon"/>
                    <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>Modern Orthodontics</strong></h3>
                </div>

                <p className="text-lg">Discrete clear aligners and modern braces tailored to align your teeth comfortably, giving you a perfectly balanced smile.</p>

                <a className="cursor-pointer underline text-(--light) w-fit py-2 px-5">Learn More →</a>
            </Cards>

            <Cards className="flex flex-col p-5 gap-5 text-shadow-lg">
                <div className="flex justify-between items-center">
                    <img className="w-20" src="/stethoscope.svg" alt="sparkles icon"/>
                    <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>Dental Implants</strong></h3>
                </div>

                <p className="text-lg">Permanent, natural-looking replacement solutions engineered to restore your missing teeth, natural chewing function, and confidence.</p>

                <a className="cursor-pointer underline text-(--light) w-fit py-2 px-5">Learn More →</a>
            </Cards>

            <Cards className="flex flex-col p-5 gap-5 text-shadow-lg">
                <div className="flex justify-between items-center">
                    <img className="w-20" src="/baby.svg" alt="sparkles icon"/>
                    <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>Pediatric Dental Care</strong></h3>
                </div>

                <p className="text-lg">Gentle, fear-free dental experiences specially crafted for children, ensuring their growing smiles stay healthy and strong.</p>

                <a className="cursor-pointer underline text-(--light) w-fit py-2 px-5">Learn More →</a>
            </Cards>

            <Cards className="flex flex-col p-5 gap-5 text-shadow-lg">
                <div className="flex justify-between items-center">
                    <img className="w-20" src="/cross.svg" alt="sparkles icon"/>
                    <h3 className="flex-1 text-center flex flex-col justify-center text-2xl h-20"><strong>Emergency Dental Care</strong></h3>
                </div>

                <p className="text-lg">Immediate, compassionate relief for sudden toothache, broken teeth, or unexpected dental emergencies when you need it most.</p>

                <a className="cursor-pointer underline text-(--light) w-fit py-2 px-5">Learn More →</a>
            </Cards>
        </section>
    );
}