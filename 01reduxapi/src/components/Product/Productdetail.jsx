import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductDetail = () => {
  const params = useParams();
  console.log(params);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        setProduct(response.data);
      } catch (err) {
        console.log("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Product Detail Page for ID: {params.productId}</div>
      <Card style={{ width: "18rem", margin: "20px auto" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Price: ${product.price}</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductDetail;
