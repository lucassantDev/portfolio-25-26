import '../style/Projects.css'
import listaDeCompras from '../assets/img/projeto-listaDeCompras.png'
import agrosense from '../assets/img/projeto-agrosense.png'

import { useState } from 'react'

function Projects(){


    const [aboutProject, setAboutProject] = useState(false)

    return(
        <>
            <section className='section-projects'>
                <h1>Projetos</h1>

                <div className='div-project'>
                    <img src={listaDeCompras} alt="imagem do projeto lista de compras" className='project'/>
                    <div className='about-project'>
                        <h2>Lista de compras</h2>
                        <div className='arrow'></div>
                    </div>

                </div>

                <div className='div-project'>
                    <img src={agrosense} alt="imagem do projeto agrosen" className='project' />
                    <div className='about-project'>
                        <h2>Agrosense</h2>
                        <div className='arrow'></div>
                    </div>
                </div>

                <div></div>
            </section>
        
        </>
    )
}

export default Projects