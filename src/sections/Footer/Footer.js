import './Footer.css'
import { FaTelegram ,FaGithub,FaWhatsapp,FaLinkedin   } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer (){
    return ( 
        <div className="footer" id='5'>
            <a className='iconCircle' href='https://github.com/Daas33'>
                    <FaGithub/>
            </a>
            <a className='iconCircle' href='https://wa.me/+963995292968'>
                    <FaWhatsapp/>
            </a>
            <a className='iconCircle' href='mailto:hatweekdaas@gmail.com'>
                    <MdOutlineEmail/>
            </a>
            <a className='iconCircle' href='https://t.me/Daas_Hatweek'>
                    <FaTelegram/>    
            </a>
            <a className='iconCircle' href='https://www.linkedin.com/in/daas-hatweek-bba323293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
                    <FaLinkedin/>
            </a>    
        </div>
    );
}
export default Footer