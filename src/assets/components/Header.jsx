import "./App.css";

const Header = ()=>
{
    return (
    <div className="flex_custom_style">
        <div className="flex_gmail_image_container">      
            <img  className="logo"src="src\assets\images\logo-gmail.png"></img>
            <h2 className="header_Style_gmail_name"> Gmail</h2>
        </div>
        <div >
            <button className="for_work_button">For Work</button>
            <button className="signin_createAccount">Sign In</button>
            <button className="signin_createAccount">Create an Account</button>
        </div>
    </div>
    )
}
export default Header