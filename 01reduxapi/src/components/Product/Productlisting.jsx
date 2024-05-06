import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { setProducts } from "../../redux/actions/productAction";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {products?.map((product) => (
        <Link to={`/productdetail/` + product.id} key={product.id}>
          <Card
            style={{
              width: "18rem",
              marginBottom: "20px",
            }}
          >
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Button variant="light">ID: {product.id}</Button>
              <br />
              <br />
              <Button variant="dark">Price: ${product.price}</Button>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ProductListing;
