
import '../style/Projects.css'
import { useState } from 'react'

function Projects(){

     const [projects] = useState([
        {
        id: 1,
        title: "Agrosense",
        image: "../src/assets/img/projeto-agrosense.png",
        link: "https://agrosenseweb.vercel.app/",
        repository: "https://github.com/lucassantDev/agrosense-scripts",
        description: "Trabalho Agrosense desenvolvido para apresentação do projeto integrador do 2° semestre da Faculdade Senac. Utilizando React para sua estruturação!"
        },
        {
        id: 2,
        title: "Lista de compras",
        image: "../src/assets/img/projeto-listaDeCompras.png",
        link: "https://lucassantdev.github.io/lista-compras/",
        repository: "https://github.com/lucassantDev/lista-compras", 
        description: "Projeto desenvolvido através do curso da Rocketseat Full-Stack. A ideia principal desse projeto era a manipulação do DOM com JavaScritp"
        }
    
    
    ])


    return(
    <>
        <section className='section-projects'>
            <h1>Projetos</h1>

                {projects.map(project => (
                    // <h2>{project.title}</h2>
                    <div className='displayMap'>
                        <img src={project.image} alt="imagem referente ao projeto" className='imageMap' />

                        <h4>
                            {project.description
                        }</h4>

                        <div className='button-acess-projects'>
                            <a href={project.repository} target='_blank'>Repositório</a>
                            <a href={project.link} target='_blank'>Projeto</a>
                            
                        </div>
                    </div> 
                ))}
        </section>

    </>
        
)
}

export default Projects;