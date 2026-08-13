    export default function Footer() {
        
        const links = [
            {
                link: "#hero",
                text: "Home"
            },
            {
                link: "#services",
                text: "Our Services"
            },
            {
                link: "#whychooseus",
                text: "Why Choose Us"
            },
            {
                link: "#testimonials",
                text: "Testimonials"
            },
            {
                link: "#faq",
                text: "Frequently Asked Questions"
            },
            {
                link: "#appointment",
                text: "Request Your Appointment"
            },  
        ];

        return (
            <div id="footer" className="bg-(--dark) text-(--text) flex flex-col items-center p-5 gap-5 text-shadow-lg">
                <div className="flex flex-col items-center gap-5">
                    <img src="/logotype2.png" alt="Dental Clinic Logo" />
                    <p className="w-[90vw] text-center font-bold">Providing compassionate, high-quality dental care for the whole family. Your smile is our top priority.</p>
                </div>

                <div className="p-5 border-y border-slate-400/60">
                    <p className="font-bold text-center">Navigation</p>
                    <ul className="grid grid-cols-2">
                        {links.map((link, index) => {
                            const sectionLink = link.link
                            const text = link.text

                            return(
                                <li key={index} className="p-5"><a className="hover:underline cursor-pointer" href={`${sectionLink}`}>{text}</a></li>
                            );
                        })}
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-5">
                    <p>© 2026 Dental Clinic. All rights reserved.</p>
                    <ul className="flex gap-5 w-full justify-between">
                        <li><a className="hover:underline" href="#">Privacy Policy</a></li>
                        <li> | </li>
                        <li><a className="hover:underline" href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
        );
    }