import React, { useState, useEffect, Suspense  } from 'react';
import Product from '../comp/Product'
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFlexGrid } from '../Hooks/useFlexGrid';

function Products() {
    const [values, setCurrentId] = useFlexGrid({pastId: 'empty', thisId: 'list-icon'});
    const [layout, setLayout] = useState('list');
    // var intervalId = setInterval(()=>{
    //     if ()
    // }, 100)
    // console.log(values.pastId);
    // console.log(values.pastId);
    useEffect(()=>{
        if(values.thisId === 'list-icon') {
            document.getElementById("products").classList.remove('products-grid');
            document.getElementById("products").classList.add('products-flex');
        }
        else {
            document.getElementById("products").classList.remove('products-flex');
            document.getElementById("products").classList.add('products-grid');
        }
    }, [values.thisId])
        return (
            <div>
                <div className="Cont prod">
                    <h1 id="prod-header" >Products:  </h1>
                    <h2 id="listgridtoggle" > 
                        <div>
                            <FontAwesomeIcon 
                                id="grid-icon" 
                                onClick = {setCurrentId} 
                                className='darkIcon'   
                                name="grid"
                                icon={faTh}/>
                        </div>
                        <div>
                            <FontAwesomeIcon 
                                id="list-icon" 
                                onClick = {setCurrentId} 
                                className='darkIcon'  
                                name="list"
                                icon={faThList}/>
                        </div>
                    </h2>
                </div>
                
                <div id="products" className="Cont products-grid">
                        <Product id="1"></Product>    
                        <Product id="2"></Product>
                        <Product id="3"></Product>
                        <Product id="4"></Product>
                        <Product id="5"></Product>
                        <Product id="6"></Product>
                </div>
                {setTimeout(() => {
                    document.getElementById(values.pastId).classList.remove('litIcon');
                    document.getElementById(values.pastId).classList.add('darkIcon');
                    document.getElementById(values.thisId).classList.remove('darkIcon');
                    document.getElementById(values.thisId).classList.add('litIcon');
                }, 0)}
                <div className="" id="empty"></div>
            </div>
        )
   
}

export default Products;

