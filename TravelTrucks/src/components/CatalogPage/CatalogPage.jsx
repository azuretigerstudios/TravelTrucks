import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { clearItems } from '../../redux/campers/slice';
import CamperCard from '../../components/CamperCard/CamperCard';
import FilterSidebar from '../../components/FilterSidebar/FilterSidebar';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);
  const [page, setPage] = useState(1);

  // 1. Sayfa ilk açıldığında veya Filtrelerle arama yapıldığında çalışır
  const handleSearchAction = () => {
    setPage(1); // Sayfayı sıfırla
    dispatch(clearItems()); // Önceki listeyi temizle
    dispatch(fetchCampers({ page: 1, filters }));
  };

  // Başlangıçta 1. sayfayı getir
  useEffect(() => {
    dispatch(fetchCampers({ page: 1, filters: {} }));
  }, [dispatch]);

  // 2. Load More (Daha Fazla Yükle) butonuna basıldığında çalışır
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    dispatch(fetchCampers({ page: nextPage, filters }));
  };

  return (
    <div style={{ display: 'flex', maxWidth: '1440px', margin: '0 auto', padding: '40px' }}>
      
      {/* Sol Taraf: Filtreler */}
      <FilterSidebar onSearch={handleSearchAction} />

      {/* Sağ Taraf: Karavan Listesi */}
      <div style={{ flex: 1 }}>
        {error && <div>Bir hata oluştu: {error}</div>}
        
        {/* Karavanları Listele */}
        {items.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}

        {/* Yüklenme Göstergesi */}
        {isLoading && <div style={{ textAlign: 'center', margin: '20px' }}>Yükleniyor...</div>}

        {/* Load More Butonu (Sadece yüklenmiyorsa ve boş dönmediyse göster) */}
        {!isLoading && items.length > 0 && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              onClick={handleLoadMore}
              style={{ padding: '16px 32px', border: '1px solid #DADDE1', backgroundColor: 'transparent', borderRadius: '200px', cursor: 'pointer', fontWeight: 'bold', transition: 'border 0.3s' }}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;