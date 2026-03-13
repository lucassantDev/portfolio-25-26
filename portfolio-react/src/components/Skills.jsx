import '../style/Skills.css';

import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiN8N } from "react-icons/si";
import { RiPhpFill } from "react-icons/ri";
import { FaJsSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";



function Skills(){
    return (
        <>
            <section className="section-skills">
                <h1>Skills</h1>
                <div className='div-stack '>
                    <div className='stack'>
                        <FaJsSquare class='icon'/>
                        Javascript
                    </div>
                    <div className='stack'>
                        <FaReact class='icon'/>
                        <p>React</p>
                    </div>
                    <div className='stack'>
                        <RiPhpFill class='icon'/>
                        <p>PHP</p>
                    </div>
                    <div className='stack'>
                        <SiTailwindcss class='icon'/>
                        Tailwindcss
                    </div>
                    <div className='stack'>
                        <FiFigma class='icon'/>
                        Figma
                    </div>
                    <div className='stack'>
                        <SiN8N class='icon'/>
                        N8N
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills