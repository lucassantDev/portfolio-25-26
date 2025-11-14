import '../style/Skills.css';
import js from '../assets/icon/javascript-icon.PNG'
import react from '../assets/icon/react-icon.png'
import tailwindcss from '../assets/icon/tailwindcss.png'
import figma from '../assets/icon/icons8-figma.svg'


function Skills(){
    return (
        <>
            <section className="section-skills">
                <h1>Skills</h1>
                <div className='div-stack'>
                    <div className='stack'>
                        <img src={js} alt="imagem javascript" />
                        Javascript
                    </div>
                    <div className='stack'>
                        <img src={react} alt="imagem React" />
                        <p>React</p>
                    </div>
                    <div className='stack'>
                        <img src={tailwindcss} alt="imagem Tailwindcss" />
                        Tailwindcss
                    </div>
                    <div className='stack'>
                        <img src={figma} alt="imagem Figma" className='figma-icon' />
                        Figma
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills