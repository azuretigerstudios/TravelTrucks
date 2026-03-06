import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewNow = () => {
    navigate('/catalog'); 
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      padding: '0 64px', 
      height: 'calc(100vh - 80px)', 
      backgroundImage: 'url("https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        Campers of your dreams
      </h1>
      <p style={{ fontSize: '24px', marginBottom: '40px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
        You can find everything you want in our catalog
      </p>
      
      {/* Call to Action Butonu */}
      <div style={{ width: 'fit-content' }}>
        <Button onClick={handleViewNow}>
          View Now
        </Button>
      </div>
    </div>
  );
};

export default HomePage;