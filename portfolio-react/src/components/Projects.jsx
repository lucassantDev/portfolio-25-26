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

                {/* refatorando */}

                <div></div>
            </section>
        
        </>
    )
}

export default Projects