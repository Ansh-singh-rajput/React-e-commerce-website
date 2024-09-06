import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function CreateProduct() {
  const { productId } = useParams(); // Get the productId from the URL
  const navigate = useNavigate(); // For redirecting after the update
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: '', // This will hold the new image file if uploaded
    imagePreview: '', // This will hold the URL for preview
    _id: '',
  });

  useEffect(() => {
    // Fetch product details based on productId
    axios.get(`https://api-ecommerce-xokr.onrender.com/api/getProductDetail/${productId}`)
      .then(response => {
        const { productDetail } = response.data;
        if (productDetail) {
          setProduct({
            name: productDetail.name,
            description: productDetail.description,
            stock: productDetail.stock,
            price: productDetail.price,
            image: '', // Reset image to allow new upload
            imagePreview: productDetail.images.url, // For previewing the existing image
            _id: productDetail._id,
          });
        }
      })
      .catch(error => {
        console.error('There was an error fetching the product data!', error);
      });
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert numeric values to numbers
    setProduct(prevState => ({
      ...prevState,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ 
      ...product, 
      image: file, // Store the file for uploading
      imagePreview: URL.createObjectURL(file) // For previewing the new image
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle image upload and other fields
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('stock', product.stock);
    formData.append('price', product.price);
    formData.append('description', product.description);

    // Only append the image if a new one is selected
    if (product.image) {
      formData.append('images', product.image); // Assuming your backend expects 'images' field
    }

    axios.put(`https://api-ecommerce-xokr.onrender.com/api/productupdate/${productId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('Product updated successfully:', response.data);
      navigate('/admin/product'); // Redirect to the product list page after successful update
    })
    .catch(error => {
      console.error('There was an error updating the product!', error);
    });
  };

  return (
    <div className="col-md-5">
      <div className="dash-right">
        <br />
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              value={product.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className='mb-3'>
            <label>Price</label>
            <input 
              type="number" 
              name="price" 
              className="form-control" 
              value={product.price} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className='mb-3'>
            <label>Stock</label>
            <input 
              type="number" 
              name="stock" 
              className="form-control" 
              value={product.stock} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <textarea 
              name="description" 
              className="form-control" 
              cols="10" 
              rows="5" 
              value={product.description} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="md-3 mb-3">
            <label>Upload Image</label>
            <input 
              type="file" 
              name="image" 
              className="form-control" 
              onChange={handleImageChange} 
            />
          </div>
          <div className="mb-3">
            <img src={product.imagePreview} width="50px" alt="Product" />
          </div>
          <button type="submit" className="btn btn-primary bg-blue-500">Update</button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
