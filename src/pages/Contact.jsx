import { PiEnvelope } from "react-icons/pi";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <section>
            <div className="flex items-center justify-center">
                <h2 className="font-bold text-4xl text-teal-500">Contact</h2>
                <PiEnvelope className="text-teal-500 m-1" size={40}/>
            </div>
            <p className="p-4">If you have any questions or are interested in collaboration, you can contact me through the below contact form.</p>
            <ContactForm></ContactForm>
        </section>

    );
    
}