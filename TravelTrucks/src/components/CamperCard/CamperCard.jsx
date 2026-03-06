import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/slice';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  
  // Bu karavan favorilerde var mı kontrolü
  const isFavorite = favorites.some((fav) => fav.id === camper.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <div className="camper-card" style={{ border: '1px solid #ddd', padding: '16px', display: 'flex', gap: '20px', marginBottom: '20px', borderRadius: '10px' }}>
      <img src={camper.gallery[0].thumb} alt={camper.name} style={{ width: '290px', height: '310px', objectFit: 'cover', borderRadius: '10px' }} />
      
      <div className="card-details" style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>{camper.name}</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Fiyat Formatlama: 8000 -> €8000.00 */}
            <span style={{ fontSize: '24px', fontWeight: 'bold' }}>€{camper.price.toFixed(2)}</span>
            <button onClick={handleFavoriteClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {isFavorite ? <FaHeart color="red" size={24} /> : <FaRegHeart size={24} />}
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <span><FaStar color="#FFC531" /> {camper.rating} ({camper.reviews.length} Reviews)</span>
          <span><FaMapMarkerAlt /> {camper.location}</span>
        </div>

        <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {camper.description}
        </p>

        {/* Özellikler (Rozetler) */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', margin: '20px 0' }}>
          <span style={{ padding: '8px 16px', background: '#F2F4F7', borderRadius: '100px' }}>{camper.transmission}</span>
          <span style={{ padding: '8px 16px', background: '#F2F4F7', borderRadius: '100px' }}>{camper.engine}</span>
          {camper.AC && <span style={{ padding: '8px 16px', background: '#F2F4F7', borderRadius: '100px' }}>AC</span>}
          {/* Diğer özellikler buraya eklenebilir */}
        </div>

        {/* Yeni sekmede açılan Detay butonu */}
        <Link 
          to={`/catalog/${camper.id}`} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '16px 40px', backgroundColor: '#E44848', color: 'white', textDecoration: 'none', borderRadius: '200px', fontWeight: 'bold' }}
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;