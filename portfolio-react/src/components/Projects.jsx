import '../style/Projects.css'
import listaDeCompras from '../assets/img/projeto-listaDeCompras.png'
import agrosense from '../assets/img/projeto-agrosense.png'

// import { useState } from 'react'

function Projects(){

    const repository = (nameRepository) =>{
        if(nameRepository === 'agrosense'){
            window.open('https://github.com/lucassantDev/agrosense-scripts', '_blank')
        }

        else if(nameRepository === 'lista'){
            window.open('https://github.com/lucassantDev/lista-compras', '_blank')
        }
    } 
    
    const project = (numberProject) =>{
        if(numberProject === 0){
            window.open('https://lucassantdev.github.io/lista-compras/', '_blank')
        }

        else if (numberProject === 1){
            window.open('https://agrosenseweb.vercel.app/', '_blank')
        }
    }

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
                            <button className="acess" onClick={() => repository('lista')}>repositório</button>
                            <button className="acess" onClick={() => project(0)}>projeto</button>
                        </div>
                    </div>

                </div>

                <div className='div-project'>
                    <img src={agrosense} alt="imagem do projeto agrosen" className='project' />
                    <div className='about-project'>
                        <h2>Agrosense</h2>
                         <p>Projeto  React desenvolvido na faculdade, onde criei meus primeiros componentes, <br /> rotas com router e utilização da MUI</p>
                        <div className='button-acess-projects'>
                            <button className="acess" name='agrosense' onClick={() => repository('agrosense')}>repositório</button>
                            <button className="acess" onClick={() => project(1)}>projeto</button>
                        </div>
                    </div>
                </div>

                <div></div>
            </section>
        
        </>
    )
}

export default Projects