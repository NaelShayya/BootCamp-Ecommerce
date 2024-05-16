import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './courseDetails.css';
import course4 from '../../assets/course4.jpg';
import course5 from '../../assets/course5.jpg';

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div className="course-detail-container">
      <div className="details-column">
        <div className="course-details">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </div>
      <div className="image-column">
        <img src={product.image} alt={product.name} className="course-image" />
      </div>
    </div>
  );
};

export default CourseDetail;