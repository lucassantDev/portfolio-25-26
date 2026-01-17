import '../style/Projects.css'
import listaDeCompras from '../assets/img/projeto-listaDeCompras.png'
import agrosense from '../assets/img/projeto-agrosense.png'

// import { useState } from 'react'

function Projects(){

    

    return(
        <>
            <section className='section-projects'>
                <h1>Projetos</h1>

                <div className='div-project'>
                    <img src={listaDeCompras} alt="imagem do projeto lista de compras" className='project'/>
                    <div className='about-project'>
                        <h2>Lista de compras</h2>
                        <p>Projeto desenvolvido através de aulas do curso full-stack da Rocketseat, trabalhando <br /> principalmente com a manipulação do DOM.</p>
                        <div className='button-acess-projects'>
                            <button className="acess">repositório</button>
                            <button className="acess">projeto</button>
                        </div>
                    </div>

                </div>

                <div className='div-project'>
                    <img src={agrosense} alt="imagem do projeto agrosen" className='project' />
                    <div className='about-project'>
                        <h2>Agrosense</h2>
                         <p>Projeto  React desenvolvido na faculdade, onde criei meus primeiros componentes, rotas com router e utilização da MUI</p>
                        <div className='button-acess-projects'>
                            <button className="acess">repositório</button>
                            <button className="acess">projeto</button>
                        </div>
                    </div>
                </div>

                <div></div>
            </section>
        
        </>
    )
}

export default Projects