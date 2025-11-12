import './style/FirstSection.css'

function FirstSection(){ 

    const githubLink = ()=>{
        window.open('https://github.com/lucassantDev', 'target=blank')
    }

    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/lucassantdev', 'target=blank')
    }

    return  <>
        <section className="section-text-image">
            <h1>Olá</h1>
            
            <div>
                <button className='button-media' onClick={linkedinLink}>
                    Linkedin
                </button>
                <button className='button-media' onClick={githubLink}>
                    Github
                </button>
            </div>
        </section>

        
    </>
  
}

export default FirstSection