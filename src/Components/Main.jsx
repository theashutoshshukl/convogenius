import '../assets/styles/main.css'
import convoImage from "../assets/images/convogenius.png"
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className='main'>
            <h1>A Fast ChatGPT</h1>
            <h2>ConvoGenius</h2>
            <p>Our technology performing fast response and it has guaranteed AI-based data research. Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
            <div className="btnContainer">
                <Link to="/signup">
                    <button className='signupBtn'>Get Started</button>
                </Link>
                <Link to="/login">
                    <button className='loginBtn'>Log in</button>
                </Link>
            </div>
            <div className="image">
                <img src={convoImage} alt="ConvoGenius" />
            </div>
        </div>
    );
}

export default Main;