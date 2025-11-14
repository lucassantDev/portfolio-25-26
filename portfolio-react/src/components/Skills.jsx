import '../style/Skills.css';


function Skills(){
    return (
        <>
            <section className="section-skills">
                <h1>Skills</h1>
                <div className='div-stack'>
                    <div>
                        <img src={js} alt="imagem javascript" />
                        Javascript
                    </div>
                    <div>
                        <img src='' alt="imagem React" />
                        React
                    </div>
                    <div>
                        <img src='' alt="imagem Tailwindcss" />
                        Tailwindcss
                    </div>
                    <div>
                        <img src='' alt="imagem Figma" />
                        Figma
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills