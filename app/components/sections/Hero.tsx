import Button from "../ui/Button";

export default function Hero() {
    return (
        <div>
            <section className=" bg-cover bg-center flex flex-col gap-5 justify-center items-center w-full h-80 relative bg-gray-500/90">
                <img src="/hero1.jpg" alt="dentist 1" className="w-full h-full object-cover absolute mask-b-from-1% " />
                <div className="absolute w-full h-full bg-slate-950/40"></div>
                <div className="absolute flex flex-col items-center justify-center gap-5">
                    <h2 className="text-4xl font-bold w-[80%] text-center text-shadow-lg text-(--text)">We Create Healthy <span className="text-sky-500">Smiles</span></h2>
                    <p className="w-[80%] text-center text-shadow-lg text-(--text)">Comprehensive, Friendly Dental Care for All Ages.</p>
                    <Button>Request Appointment</Button>
                </div>
            </section>
        </div>
    )
}