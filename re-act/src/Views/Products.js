import React, { useState, useEffect, Suspense  } from 'react';
import Product from '../comp/Product'
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFlexGrid } from '../Hooks/useFlexGrid';

function Products() {
    const [values, setCurrentId] = useFlexGrid({pastId: 'empty', thisId: 'list-icon'});
    // var intervalId = setInterval(()=>{
    //     if ()
    // }, 100)
    // console.log(values.pastId);
    // console.log(values.pastId);
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
                                icon={faTh}/>
                        </div>
                        <div>
                            <FontAwesomeIcon 
                                id="list-icon" 
                                onClick = {setCurrentId} 
                                className='darkIcon'  
                                icon={faThList}/>
                        </div>
                    </h2>
                </div>
                
                <div className="Cont products-flex">
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
                <div className="" id="empty">dsqsdqsdsqdqsf</div>
            </div>
        )
   
}

export default Products;

