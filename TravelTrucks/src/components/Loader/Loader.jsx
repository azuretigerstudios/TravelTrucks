import React from 'react';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
      {/* Basit bir CSS spinner veya metin. */}
      <h3 style={{ color: '#E44848' }}>Yükleniyor...</h3>
    </div>
  );
};

export default Loader;