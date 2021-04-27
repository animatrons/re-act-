import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Product(props) {
    const url = "https://60882528a6f4a30017425cc1.mockapi.io/api/pr/products/" + props.id;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setProduct(response.data);
            });
    }, [url])

    if (product) {
        return (
            <div className="single-product">
                <div >
                    <img
                        src={product.images[0].imageUrl}
                        alt={product.name}
                    />
                </div>
                <h2>{product.name}</h2>
                <div className="desc-price">
                    <div>
                        {product.description}
                    </div>
                    <div>
                        $ {product.price}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Product;