import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../comp/Product'

function Products() {
    const url = "https://60882528a6f4a30017425cc1.mockapi.io/api/pr/products/3";
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then( response => {
                setProduct(response.data);
            });
    }, [url])

    if(product) {
        return (
            <div>
                <div className="Cont prod">
                    <h1>Products: </h1>
                </div>
                <div className="Cont products">
                    <Product id="1"></Product>
                    <Product id="2"></Product>
                    <Product id="3"></Product>
                    <Product id="4"></Product>
                </div>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Products;

