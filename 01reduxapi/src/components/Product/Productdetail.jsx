import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams hook from React Router
import axios from "axios"; // Import axios for making HTTP requests
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Functional component for Product Detail page
const ProductDetail = () => {
  const params = useParams(); // Get parameters from the URL

  const [product, setProduct] = useState(null); // State to store product data

  useEffect(() => {
    // Asynchronous function to fetch product data
    const fetchProduct = async () => {
      try {
        // Send GET request to the Fake Store API to fetch product details based on productId
        const response = await axios.get(
          `https://fakestoreapi.com/products/${params.productId}`
        );
        // Set product state with the fetched data
        setProduct(response.data);
      } catch (err) {
        console.log("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [params.productId]); // Dependency array to re-run useEffect when productId changes

  if (!product) {
    return <div className="text-center mt-5 ">Loading......🔃</div>;
  }

  // Render product details once data is fetched
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
