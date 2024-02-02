import './Information.css'
import {Button,UnFocusedButton} from '../../components/index';
import CV from '../../CV.pdf'
function Information (){
    return(
        <div className="information">
            <p>Software Engineer</p>
            <h1> Daas Hatweek </h1>
            <p> Software engineer | Back end Django developer | Python developer.</p>
            <div className='Buttons'>
            <a href={CV}  download="CV-PDF-document" target="_blank" rel="noreferrer"><Button>Download CV</Button></a>
            <UnFocusedButton>contact me</UnFocusedButton>
            </div>
        </div>
    );
}
export default Information