import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ProductDetails = () => {
    const params = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.productId}</p>
      <p>
        <Link to=".." relative="path">Back to products</Link>
      </p>
    </div>
  )
};

export default ProductDetails
