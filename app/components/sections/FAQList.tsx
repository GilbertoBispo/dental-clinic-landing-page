'use client';

export default function FAQList() {

    const questions = [
        {
            q: "Do you accept dental insurance and offer payment plans?",
            a: "Yes! We accept most major dental insurance plans and handle the paperwork for you. For treatments not covered by insurance, we offer flexible, 0%-interest monthly financing options to fit your budget."
        },
        {
            q: "How quickly can I get an emergency appointment?",
            a: "We reserve dedicated daily slots for urgent dental care. If you are experiencing severe pain, bleeding, or a broken tooth, contact us immediately for same-day priority care."
        },
        {
            q: "I suffer from dental anxiety. How can your team help me?",
            a: "Your comfort is our top priority. We specialize in gentle dentistry, offer sedation options, and maintain a warm, judgment-free environment so you feel relaxed during every step of your visit."
        },
        {
            q: "What should I expect during my first visit?",
            a: "Your initial visit includes a thorough oral health examination, low-radiation digital X-rays, a gentle cleaning, and a personalized treatment discussion with your dentist to address your goals."
        },
        {
            q: "Will professional teeth whitening cause sensitivity?",
            a: "We use advanced whitening formulas specifically designed to deliver dramatic, bright results while protecting your enamel and minimizing—or completely eliminating—tooth sensitivity."
        },
        {
            q: "How do I book or reschedule an appointment?",
            a: `You can book instantly through our website's "Request Appointment" button or by calling our clinic. If you need to reschedule, simply let us know at least 24 hours in advance.`
        },
    ];

    return(
        <section className="p-5 flex flex-col">
            <div className="xl:grid xl:grid-cols-2 xl:gap-x-5">
                {
                    questions.map((question, index) => {
                        // veirifica se "index" é igual ao índice especificado
                        const isPenult = index === questions.length - 2
                        // captura as informações dos objetos do array
                        const theQuestion = question.q;
                        const theAnswer = question.a
                        
                        return (
                            <details key={index} className={`${isPenult ? 'xl:border-[2px_0px_2px_0px]' : ''} flex flex-col justify-center group border-[2px_0px_0px_0px] last:border-[2px_0px_2px_0px] border-(--dark)`}>
                                <summary className="p-5 font-bold text-xl transition-all duration-500 list-none h-fit w-full"><span className="inline-block transition-all duration-500 group-open:rotate-90 text-2xl text-bold"> <img src="/chevron-right.svg" alt="chevron icon" /> </span> "{theQuestion}"</summary>
                
                                <ul className="p-5">
                                    <li className="opacity-0 h-0 grid group-open:transition-all group-open:duration-300 group-open:delay-150 group-open:ease-in-out group-open:opacity-100 group-open:h-fit">{theAnswer}</li>
                                </ul>
                            </details>
                        );
                    })
                }
            </div>
        </section>
    );
}