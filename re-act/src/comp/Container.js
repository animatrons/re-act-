
import Hello from './Hello';
import About from '../Views/About';
import Home from '../Views/Home';

function Container(props) {
    if ( props.page == 'home')
    return (
        <Home></Home>
    )
    if (props.page == 'about')
    return ( 
        <About></About>
    )
}

export default Container;