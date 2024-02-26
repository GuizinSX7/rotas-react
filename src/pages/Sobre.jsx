import Menu from "./Menu";

function Sobre(){
    return(
        <div> 
            <img class="logo" src="./img/logo.png" alt="logo-solo" width={500} /> 
            <div className="sobre">
                <h1>Sobre </h1>
                <Menu />
            </div>  
        </div>
    )
}

export default Sobre;