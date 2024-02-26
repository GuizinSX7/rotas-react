import Menu from "./Menu";

function Contato(){
    return(
        <div>
            <img class="logo" src="./img/logo.png" alt="logo-solo" width={500} />
            <div className="contato">
                <h1>Contato</h1>
                <Menu />
            </div>
        </div>
    )
}

export default Contato;