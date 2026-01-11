import '../style/Projects.css'
import listaDeCompras from '../assets/img/projeto-listaDeCompras.png'
import agrosense from '../assets/img/projeto-agrosense.png'

function Projects(){
    return(
        <>
            <section className='section-projects'>
                <h1>Projetos</h1>
                <div className='div-projeto'>
                    <h2>Lista de compras</h2>
                    <img src={listaDeCompras} alt="imagem do projeto lista de compras" className='projeto'/>
                </div>
                <div className='div-projeto'>
                    <h2>Agrosense</h2>
                    <img src={agrosense} alt="imagem do projeto agrosen" className='projeto' />
                </div>
                <div></div>
            </section>
        
        </>
    )
}

export default Projects