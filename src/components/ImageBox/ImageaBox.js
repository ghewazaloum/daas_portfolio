import daas from '../../Assests/Images/daas.png'
import './ImageBox.css';
function ImageBox(){
    return(
        <div className="image-box">
            <img src={daas} alt="daas hatweek"/>
        </div>
    );
}
export default ImageBox