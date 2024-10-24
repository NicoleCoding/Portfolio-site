import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="pt-6 mt-5 bg-black text-white font-custom">
            <p className="p-2">&copy; 2024 NicoleCoding. All rights reserved.</p>
            <div className="flex flex-row justify-center items-center gap-10">
                <a href="https://www.linkedin.com/in/nicole-saucinitanu-9b95ba167/" className="flex items-center justify-center hover:text-teal-400 m-2 text-white"><FaLinkedin className="m-1 text-white" />LinkedIn</a>
                <a href="https://github.com/NicoleCoding" className="flex items-center justify-center hover:text-teal-400 m-2 text-white"><FaGithub className="m-1 text-white" />GitHub</a>
            </div>
        
        </footer>

    );
    
}