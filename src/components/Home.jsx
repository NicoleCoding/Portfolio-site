import { Link } from "wouter";

export default function Home() {
    return (
        <section className="container mx-auto p-4 md:p-8">
            <section id="intro" className="flex flex-col md:flex-col justify-between items-center bg-hero-background bg-no-repeat bg-cover p-5 text-white rounded-lg h-25 bg-center">
                <h2 className="font-bold text-4xl text-teal-500">Frontend developer with UX skills</h2>
                <p className="p-3 text-xl">Welcome to my portfolio! My name is Nicole and I am an aspiring frontend developer with UX skills. With a solid foundation in HTML, CSS and JavaScript, in combination with my UX
                    skills, I aim to create amazing user experiences. Always learning and keen to sharpen my expertise in various technologies, since this field is always evolving.
                </p>

            </section>
            <section className="bg-gradient-to-r from-teal-200 to-teal-500 p-2 mt-16 rounded-lg w-80 flex flex-col text-center">
            <ul>
            <h2 className="font-bold text-2xl pt-5">Relevant skillset</h2>
                <li className="m-2">HTML5</li>
                <li className="m-2">CSS3</li>
                <li className="m-2">JavaScript</li>
                <li className="m-2">React.js</li>
                <li className="m-2">UX-design</li>
                <li className="m-2"><Link href="/about">...and more</Link></li>
            </ul>
            </section>
    

        </section>
    
        

    );
}