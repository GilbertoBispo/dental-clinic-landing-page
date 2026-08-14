export default function TestemonialsHeader() {
    return (
        <section id="testimonials" className="flex flex-col items-center relative bg-gray-500/90 h-82.5">
            <img src="/hero3.jpg" alt="dentist 2" className="object-cover mask-b-from-1%"/>

            <div className="flex w-full h-full absolute bg-slate-950/40 justify-center">
            
                <div className="absolute flex flex-col items-center p-5 justify-around z-10 h-full">

                    <h2 className="text-center text-3xl text-shadow-lg font-extrabold w-full text-(--text)">Patient <span className="text-sky-500 w-fit">Testimonials</span></h2>

                    <h3 className="text-center  text-shadow-lg font-bold w-full text-(--text)">Real Stories, Real Smiles</h3>

                    <p className="w-fit text-center text-lg text-shadow-lg text-(--text)">Discover how we’ve helped our patients overcome dental anxiety and achieve the healthy, confident smiles they deserve.</p>

                    <div className="flex items-center justify-center">
                        <div className="text-2xl">⭐</div>
                        <h2 className="text-2xl text-center text-sky-500">4.9/5.0 Rating based on 250+ Verified Google Reviews</h2>
                        <div className="text-2xl">⭐</div>
                    </div>
                </div>

            </div>
        </section>
    );
}