export default function WhyChooseUs() {
    return (
        <section id="whychooseus" className="flex flex-col items-center relative bg-gray-500/90 h-82.5">
            <img src="/hero2.jpg" alt="dentist 2" className="object-cover mask-b-from-1% h-full w-full"/>

            <div className="w-full h-full absolute bg-slate-950/40">
            
                <div className="absolute flex flex-col items-center p-5 justify-around z-10 h-full">

                    <h2 className="text-center text-3xl text-shadow-lg font-extrabold w-full text-(--text)">Why Choose <span className="text-sky-500 w-fit">Us</span> ?</h2>

                    <h3 className="text-center  text-shadow-lg font-bold w-full text-(--text)">Experience the Difference in Modern Dentistry</h3>

                    <p className="w-fit text-center text-lg text-shadow-lg text-(--text)">We combine cutting-edge technology with a gentle, compassionate approach to deliver a stress-free dental experience.</p>
                </div>

            </div>
        </section>
    );
}