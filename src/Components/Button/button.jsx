import "./button.css";
function Button({title, className, onClick}){
    return(
        <button className={`btn ${className}`} onClick={onClick}>
            {title}
        </button> 

    )
}
export default Button;