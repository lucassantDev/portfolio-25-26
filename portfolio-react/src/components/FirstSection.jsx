import '../style/FirstSection.css'
// import lucassantDev from 'lucassantDev.png'

function FirstSection(){ 


    const githubLink = ()=>{
        window.open('https://github.com/lucassantDev', 'target=blank')
    }

    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/lucassantdev', 'target=blank')
    }

    return  <>
        <section className="section-text-image">
            <h1 className='h1-firstSection gradient-text'>Um estudante curioso  <br />pelo mundo da tecnologia!</h1>

            {/* <img src={lucassantDev} alt="" /> */}
            
            <div className='buttons'>
                <div className='button-media linkedin-button' onClick={linkedinLink}>
                    Linkedin
                </div>
                <div className='button-media github-button' onClick={githubLink}>
                    Github
                </div>
            </div>
        </section>

        
    </>
  
}

export default FirstSection