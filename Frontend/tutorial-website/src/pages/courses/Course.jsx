import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import course1 from "../../assets/course1.jpg";
import course2 from "../../assets/course2.jpg";
import course3 from "../../assets/course3.jpg";
import course4 from "../../assets/course4.jpg";
import course5 from "../../assets/course5.jpg";
import "./course.css";

const CourseList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/products/getAllProducts")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products:", data.products);

        const products = data.products;
        const productImages = [course1, course2, course3, course4, course5];

        const updatedProducts = products.map((product, index) => ({
          ...product,
          product_image: {
            contentType: "image/jpeg",
            data: productImages[index % productImages.length],
          },
        }));

        setProducts(updatedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="course-title">Courses List</h1>
      <div className="course-list">
        {products.map((product) => (
          <div key={product.id} className="course-product-box">
            <div className="product-image-container">
              <img src={product.product_image.data} alt={product.name} />
            </div>
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <Link to={`/course/${product.slug}`}>
                <button>View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
