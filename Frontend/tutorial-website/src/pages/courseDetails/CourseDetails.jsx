import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './courseDetails.css';
import course1 from '../../assets/course1.jpg';
import course2 from '../../assets/course2.jpg';
import course3 from '../../assets/course3.jpg';
import course4 from '../../assets/course4.jpg';
import course5 from '../../assets/course5.jpg';
import Footer from '../../components/Footer/Footer';

const CourseDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/products/${slug}`);
        const data = await response.json();
        console.log('Product response:', data);

        if (data.product) {
          const productWithImage = assignImageToProduct(data.product);
          setProduct(productWithImage);
        } else {
          setError('Product not found');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Error fetching product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const assignImageToProduct = (product) => {
    const images = [course1, course2, course3, course4, course5];
    // Generate a random index within the range of the images array
    const randomIndex = Math.floor(Math.random() * images.length);
    const image = images[randomIndex];
    console.log('Assigned image:', image);
    return {
      ...product,
      image
    };
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="no-product">No product found</div>;
  }

  return (
    <div>
    <h1 className="course-title">Course Details</h1> 
   <div className="course-detail-container">
    
  <div className="details-row">
    <div className="details-column">
      <div className="course-details">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-description">{product.long_description}</div>
        <div className="product-description">Certification: {product.certification}</div>
        <div className="product-description">Lessons: {product.lessons}</div>
        <div className="buy-now-row">
        <div className="product-price">Price: ${product.price}</div>
        <button className="buy-now-button">Buy Now</button></div>
      </div>
    </div>
    <div className="image-column">
      <img src={product.image} alt={product.name} className="course-image" />
    </div>
  </div></div>

<Footer />
</div>

  );
};

export default CourseDetail;
