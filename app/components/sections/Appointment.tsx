import Button from "../ui/Button";

export default function Appointment() {
    return (
        <section id="appointment" className="bg-(--dark) text-(--text) flex flex-col items-center p-5 text-shadow-lg">
            <div className="flex flex-col items-center gap-5">
                <h2 className="text-3xl text-center">Request Your <span className="text-sky-500">Appointment</span></h2>
                <h3 className="font-bold text-center">Ready for a Healthier, Brighter Smile?</h3>
                <p className="text-center">Book your consultation today and take the first step toward the gentle, top-tier dental care you deserve. We're here to help you smile with confidence.</p>

                <div className="flex flex-col items-center gap-5 lg:flex-row">
                    <Button className="">Schedule Your Visit</Button>
                    <Button className="bg-[#25D366] flex justify-between hover:bg-[#56f791]"><img className="w-6 h-6 mr-2" src="/whatsapp.svg" alt="whatsapp icon" /> Chat on WhatsApp</Button>
                </div>
            </div>
        </section>
    );
}