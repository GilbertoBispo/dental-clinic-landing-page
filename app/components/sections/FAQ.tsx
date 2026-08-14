export default function FAQ() {
    return(
        <section id="faq" className="flex flex-col items-center relative bg-gray-500/90 h-82.5">
            <img src="/hero4.jpg" alt="dentist 2" className="object-cover absolute inset-0 h-full w-full mask-b-from-1%"/>

            <div className="flex w-full h-full absolute bg-slate-950/40 justify-center">
            
                <div className="absolute flex flex-col items-center p-5 justify-around z-10 h-full">

                    <h2 className="text-center text-3xl text-shadow-lg font-extrabold w-full text-(--text)">Frequently Asked <span className="text-sky-500 w-fit">Questions</span></h2>

                    <h3 className="text-center  text-shadow-lg font-bold w-full text-(--text)">Have Questions? We Have Answers.</h3>

                    <p className="w-fit text-center text-lg text-shadow-lg text-(--text)">Find quick answers to common questions about our dental treatments, appointments, insurance, and patient care.</p>

                </div>

            </div>
        </section>
    );
}