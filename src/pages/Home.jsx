import Menu from "./Menu";

function Home(){
    return(
        <div>
            <img class="logo" src="./img/logo.png" alt="logo-solo" width={500} />
            <div className="home">
                <h1>Home </h1>
                <Menu />
            </div>
        </div>
    )
}

export default Home;