import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams(); // Recibe los parámetros del slug

  const { state } = useLocation();
  const { products, confirmationCode } = state || {
    products: [],
    confirmationCode: '',
  };

  return (
    <>
      <h1>Mi Blog</h1>
      <p>El título del post al que has accedido es:</p>
      <p>{slug}</p>
      <p>Has comprado los siguientes productos:</p>
      {products.map((product) => (
        <p>{product}</p>
      ))}
      <p>Tu código de confirmación es: {confirmationCode}</p>
    </>
  );
};

export default BlogPost;
