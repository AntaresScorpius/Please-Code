import "./home.css";

const onAddHandler = (event) => {
    console.log(event);
}

function Navigation() {
    return (
        <div className="nav-bar">
            <button className="nav-button btn-home">
                Home
            </button>
            <button className="nav-button btn-add" onClick={onAddHandler}>
                Add
            </button>
            <button className="nav-button btn-login" >
                Login
            </button>
            
        </div>
    );
}
export default Navigation;
