import "./input.css"

function Input ({
    Label="search products",
    type="text",
    placeholder="Search Products Here..",
    value="",
    onChange=() => {}
})
{
    return(
        <div className="input-container">
            <input className="input-field" type={type} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            className="input-field"/>
        </div>    )
}
export default Input