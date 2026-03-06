import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperDetails } from '../../redux/campers/operations';
import Loader from '../../components/Loader/Loader';
import BookingForm from '../../components/BookingForm/BookingForm'; 
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const CamperDetailsPage = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const { currentCamper: camper, isLoading, error } = useSelector((state) => state.campers);
  const [activeTab, setActiveTab] = useState('features'); 

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (error) return <div>Hata: {error}</div>;
  if (!camper) return null;

  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '40px' }}>
      {/* Üst Kısım: Başlık, Puan, Fiyat */}
      <h1 style={{ marginBottom: '10px' }}>{camper.name}</h1>
      <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
        <span><FaStar color="#FFC531" /> {camper.rating} ({camper.reviews.length} Reviews)</span>
        <span><FaMapMarkerAlt /> {camper.location}</span>
      </div>
      <h2 style={{ fontSize: '24px', marginBottom: '25px' }}>€{camper.price.toFixed(2)}</h2>

      {/* Galeri */}
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', marginBottom: '25px' }}>
        {camper.gallery.map((img, index) => (
          <img key={index} src={img.original} alt={`${camper.name} view ${index + 1}`} style={{ width: '290px', height: '310px', objectFit: 'cover', borderRadius: '10px' }} />
        ))}
      </div>
      <p style={{ color: '#475467', marginBottom: '40px' }}>{camper.description}</p>

      {/* Sekmeler (Tabs) */}
      <div style={{ display: 'flex', gap: '40px', borderBottom: '1px solid #DADDE1', marginBottom: '40px' }}>
        <button 
          onClick={() => setActiveTab('features')}
          style={{ background: 'none', border: 'none', paddingBottom: '15px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', borderBottom: activeTab === 'features' ? '4px solid #E44848' : 'none' }}
        >
          Features
        </button>
        <button 
          onClick={() => setActiveTab('reviews')}
          style={{ background: 'none', border: 'none', paddingBottom: '15px', fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', borderBottom: activeTab === 'reviews' ? '4px solid #E44848' : 'none' }}
        >
          Reviews
        </button>
      </div>

      {/* Alt İçerik Alanı (Sekme İçeriği ve Form) */}
      <div style={{ display: 'flex', gap: '40px' }}>
        <div style={{ flex: 1 }}>
          {activeTab === 'features' ? (
             <div>
                {/* Özellik Rozetleri */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
                  {camper.AC && <span style={{ padding: '12px 18px', background: '#F2F4F7', borderRadius: '100px' }}>AC</span>}
                  <span style={{ padding: '12px 18px', background: '#F2F4F7', borderRadius: '100px' }}>{camper.transmission}</span>
                  <span style={{ padding: '12px 18px', background: '#F2F4F7', borderRadius: '100px' }}>{camper.engine}</span>
                  {camper.kitchen && <span style={{ padding: '12px 18px', background: '#F2F4F7', borderRadius: '100px' }}>Kitchen</span>}
                </div>
                {/* Araç Detayları Tablosu */}
                <h3>Vehicle details</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #DADDE1' }}><span>Form</span><span>{camper.form}</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #DADDE1' }}><span>Length</span><span>{camper.length}</span></li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #DADDE1' }}><span>Width</span><span>{camper.width}</span></li>
                </ul>
             </div>
          ) : (
             <div>
                {/* Yorumlar Alanı */}
                {camper.reviews.map((review, index) => (
                  <div key={index} style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#F2F4F7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '24px', fontWeight: 'bold', color: '#E44848' }}>
                        {review.reviewer_name.charAt(0)}
                      </div>
                      <div>
                        <h4>{review.reviewer_name}</h4>
                        <div style={{ color: '#FFC531' }}>
                           {/* Basit Yıldız Puanlama */}
                           {[...Array(5)].map((_, i) => <FaStar key={i} color={i < review.reviewer_rating ? "#FFC531" : "#F2F4F7"} />)}
                        </div>
                      </div>
                    </div>
                    <p style={{ color: '#475467' }}>{review.comment}</p>
                  </div>
                ))}
             </div>
          )}
        </div>

        {/* Sağ Taraf: Rezervasyon Formu */}
        <div style={{ width: '450px' }}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsPage;