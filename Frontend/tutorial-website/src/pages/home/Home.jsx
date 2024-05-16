import { React, useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import course1 from '../../assets/course1.jpg';
import course2 from '../../assets/course2.jpg';
import course3 from '../../assets/course3.jpg';
import course4 from '../../assets/course4.jpg';
import course5 from '../../assets/course5.jpg';
import feedbackUser1 from '../../assets/feedbackUser1.jpg';
import feedbackUser2 from '../../assets/feedbackUser2.jpg';
import feedbackUser3 from '../../assets/feedbackUser3.jpg';
import { Tabs, Tab } from '@mui/material';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  // Function to convert Buffer to base64 string
  const bufferToBase64 = (buffer) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(new Blob([buffer]));
  });
};
  // useEffect(() => {
  //   // Fetch products from the API
  //   fetch('http://localhost:3001/api/products/getAllProducts')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Fetched products:', data.products);
  //       Convert Buffer to base64 string for each product
  //       const updatedProducts = data.products.map(product => ({
  //         ...product,
  //         product_image: {
  //           ...product.product_image,
  //           data: product.product_image && product.product_image.data ? bufferToBase64(product.product_image.data) : null
  //         }
  //       const updatedProducts = data.products.map((product, index) => ({
  //       ...product,
  //       product_image: {
  //         contentType: 'image/jpeg', 
  //         data: index === 0 ? course1 : course2;
  //       }
  //       }));
        

  //       setProducts(updatedProducts);
  //     })
  //     .catch(error => console.error('Error fetching products:', error));

      useEffect(() => {
  // Fetch products from the API
  fetch('http://localhost:3001/api/products/getAllProducts')
  .then(response => response.json())
  .then(data => {
    console.log('Fetched products:', data.products);

    // Extract the products from the response
    const products = data.products;

    // Define an array of images
    const productImages = [course1, course2, course3, course4, course5];

    // Slice the array to get only the first 5 products
    const firstFiveProducts = data.products.slice(0, 5);

    // Map over the products and assign specific images in order
    const updatedProducts = firstFiveProducts.map((product, index) => ({
      ...product,
      product_image: {
        contentType: 'image/jpeg', // Assuming the contentType is always jpeg
        data: productImages[index % productImages.length] // Cycling through the productImages array
      }
    }));

    // Update the state with the mapped products
    setProducts(updatedProducts);
  })
  .catch(error => console.error('Error fetching products:', error));


    // Fetch categories from the API
    fetch('http://localhost:3001/api/category/getAll')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched categories:', data.categories);
        setCategories(data.categories);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const feedbacks = [
    {
      id: 1,
      user: 'John Doe',
      message: 'Great product! I loved it.',
      rating: 5,
      imageUrl: feedbackUser1
    },
    {
      id: 2,
      user: 'Jane Smith',
      message: 'Very useful and well made.',
      rating: 4,
      imageUrl: feedbackUser2
    },
    {
      id: 3,
      user: 'Sam Wilson',
      message: 'Good value for the price.',
      rating: 3,
      imageUrl: feedbackUser3
    }
  ];

  return (
    <div className="home-container">
      <div className="featured-products">
        <h2>Featured Courses</h2>
        <div className="featured-products-container">
          {products.map(product => (
            <div key={product.id} className="product-box">
              <div className="product-image-container">
                {product.product_image && product.product_image.contentType && product.product_image.data &&
                  <img 
                  src={product.product_image.data} 
                  alt={product.name} 
                  className="product-image" 
                />
                }
              </div>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">Price: {product.price}$</div>
                <div className="product-description">{product.description}</div>
                <button className="buy-button">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="categories">
        <h2>Categories</h2>
        <Tabs variant="fullWidth">
          {categories.map(category => (
            <Tab 
              key={category.id} 
              label={category.name} 
              sx={{
                border: '1px solid #ddd',
                borderRadius: '4px',
                margin: '0 4px',
                textTransform: 'none',
                padding: '8px 16px',
                minHeight: 'auto',
                '&:hover': {
                  backgroundColor: '#ffe0e0',
                },
                '&.Mui-selected': {
                  borderColor: '#ff282e',
                  backgroundColor: '#ffe5e7',
                  color: '#ff282e',
                }
              }}
            />
          ))}
        </Tabs>
      </div>
      <div className="customer-feedback">
        <h2>Customer Feedback</h2>
        <div className="feedback-container">
          {feedbacks.map(feedback => (
            <div key={feedback.id} className="feedback-box">
              <div className="feedback-image-container">
                <img src={feedback.imageUrl} alt={feedback.user} className="feedback-image" />
              </div>
              <div className="feedback-details">
                <div className="feedback-user">{feedback.user}</div>
                <div className="feedback-message">{feedback.message}</div>
                <div className="feedback-rating">Rating: {feedback.rating}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="view-courses">
        
        <Link to="/course" className="buy-button">View Courses</Link>
      </div>
    </div>
    
  );
}

export default Home;
