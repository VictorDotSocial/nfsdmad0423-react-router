import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPage = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/blog/mi-noticia-de-prueba', {
      state: {
        products: ['Zapatillas', 'Camiseta'],
        confirmationCode: 495783478,
      },
    });
  };

  return (
    <>
      <h1>BlogPage - Mi Blog</h1>
      <p>Navegación a otra vista mediante un botón</p>
      <div onClick={handleButton}>Navegar a otra ruta</div>
    </>
  );
};

export default BlogPage;
