import './WorkCard.css'
function WorkCard (props){
    return(
        <div className="WorkCard">
            {props.children}
        </div>
    );
}
export default WorkCard