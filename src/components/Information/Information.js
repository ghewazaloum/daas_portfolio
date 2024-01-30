import './Information.css'
import {Button,UnFocusedButton} from '../../components/index';
function Information (){
    return(
        <div className="information">
            <p>Software Engineer</p>
            <h1> Daas Hatweek </h1>
            <p> Software engineer | Back end Django developer | Python developer.</p>
            <div className='Buttons'>
            <Button>Download CV</Button>
            <UnFocusedButton>contact me</UnFocusedButton>
            </div>
        </div>
    );
}
export default Information