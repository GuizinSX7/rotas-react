import Menu from "./Menu";

function Badge(){
    return(
        <div>
            <img class="logo" src="./img/logo.png" alt="logo-solo" width={500} />
            <div className="badge">
                <h1>Badge</h1>
                <Menu />
            </div>
            <div className="cloud">
                <a href="https://www.cloudskillsboost.google/public_profiles/b617d528-c615-45f7-87e9-d2fb2df4a92b">Visite meu perfil do google cloud</a>
            </div>
           
        </div>
    )
}

export default Badge;