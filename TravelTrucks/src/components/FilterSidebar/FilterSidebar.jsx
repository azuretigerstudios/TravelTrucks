import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filters/slice';

const FilterSidebar = ({ onSearch }) => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSearch = () => {
    // Redux state'ini güncelle
    dispatch(setFilters({ location, form: vehicleType }));
    // Arama fonksiyonunu tetikle (Katalog sayfasından gelecek)
    onSearch(); 
  };

  return (
    <div style={{ width: '360px', paddingRight: '40px' }}>
      <div style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', color: '#10182880', marginBottom: '8px' }}>Location</label>
        <input 
          type="text" 
          placeholder="City" 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ width: '100%', padding: '18px', borderRadius: '10px', border: '1px solid #F2F4F7', background: '#F7F7F7' }}
        />
      </div>

      <h3 style={{ borderBottom: '1px solid #DADDE1', paddingBottom: '24px' }}>Filters</h3>
      
      {/* Araç Tipi Seçimi (Radyo butonları gibi çalışmalı, basitleştirilmiş hali) */}
      <div style={{ margin: '24px 0' }}>
        <h4 style={{ marginBottom: '20px' }}>Vehicle type</h4>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setVehicleType('panelTruck')} style={{ border: vehicleType === 'panelTruck' ? '1px solid red' : '1px solid #ddd', padding: '10px' }}>Van</button>
          <button onClick={() => setVehicleType('fullyIntegrated')} style={{ border: vehicleType === 'fullyIntegrated' ? '1px solid red' : '1px solid #ddd', padding: '10px' }}>Fully Integrated</button>
          <button onClick={() => setVehicleType('alcove')} style={{ border: vehicleType === 'alcove' ? '1px solid red' : '1px solid #ddd', padding: '10px' }}>Alcove</button>
        </div>
      </div>

      <button 
        onClick={handleSearch}
        style={{ width: '100%', padding: '16px', backgroundColor: '#E44848', color: 'white', border: 'none', borderRadius: '200px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Search
      </button>
    </div>
  );
};

export default FilterSidebar;