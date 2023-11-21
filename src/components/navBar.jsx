import "./navBar.style.css";

export function NavBar( {topics, topicCodes} ) {
   
    const handleSignUp = () => {
        window.indigitall.topicsSubscribe(topicCodes, (topics) => {
            console.log(topics, 'te has subscrito'); 
        });
    };
    return (
        <nav className="nav-container">
            <div className="company-container">
                <img src="" alt="" />
                <h2>Indigitall</h2>
            </div>
            <div className="nav-buttons-container">
                <a className="button" href="/signUp" onClick={handleSignUp}>
                    Sign Up
                </a>
                <a
                    href="/logIn"
                    className="button button-contact"
                    onClick={handleLogIn}>
                    Log In
                </a>
            </div>
        </nav>
    );
}
