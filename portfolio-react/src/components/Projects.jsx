import '../style/Projects.css'
import listaDeCompras from '../assets/img/projeto-listaDeCompras.png'

function Projects(){
    return(
        <>
            <section className='section-projects'>
                <div>
                    <h2>Lista de compras</h2>
                    <img src={listaDeCompras} alt="" />
                </div>
                <div></div>
                <div></div>
            </section>
        
        </>
    )
}

export default Projects