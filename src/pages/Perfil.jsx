import Menu from "./Menu";

function Perfil(){
    return(
        <div>
            <img class="logo" src="./img/logo.png" alt="logo-solo" width={500} />
            <div class="perfil">
                <h1>Perfil</h1>
                <Menu />
            </div>
            
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/guilherme-ferraresi-dallacqua-b685342b7/">Visite meu perfil do linkedin</a>
            </div>
        </div>
    )
}

export default Perfil;