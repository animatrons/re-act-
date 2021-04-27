import Hello from '../comp/Hello';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div >
            <div className="Cont-border home">
                <Hello greeting="Welcome" name="!"/>
                <h1>This is the home page</h1>
                <div >
                    <span className="logo">re-Act</span>
                </div>
            </div>
            <div className="Cont home">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae id magni et, aspernatur provident repudiandae magnam est accusantium facere voluptate officiis obcaecati sunt, optio inventore repellendus necessitatibus? Maiores, doloribus?
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, voluptatibus quia totam harum perspiciatis magnam unde officiis quo doloribus maxime sequi quibusdam qui debitis ratione nemo provident expedita libero adipisci.
                </p>
                <p>
                    <span>
                        <Link to="/products" className="lnk">
                            Start here
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Home;