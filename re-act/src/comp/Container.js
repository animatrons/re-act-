
import Hello from './Hello';
import About from '../Views/About';
import Home from '../Views/Home';
import Products from '../Views/Products';

function Container(props) {
    if ( props.page === 'home')
    return (
        <Home></Home>
    )
    else if (props.page === 'about')
    return ( 
        <About></About>
    )
    else if (props.page === 'products')
    return (
        <Products></Products>
    )
}

export default Container;