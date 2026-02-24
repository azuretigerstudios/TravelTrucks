import { Routes, Route } from 'react-router-dom';

// İleride import edeceğimiz sayfalar:
// import HomePage from './pages/HomePage/HomePage';
// import CatalogPage from './pages/CatalogPage/CatalogPage';
// import CamperDetailsPage from './pages/CamperDetailsPage/CamperDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Ana Sayfa (HomePage)</div>} />
      <Route path="/catalog" element={<div>Katalog Sayfası (CatalogPage)</div>} />
      <Route path="/catalog/:id" element={<div>Detay Sayfası (CamperDetailsPage)</div>} />
      {/* Yanlış URL girilirse ana sayfaya yönlendir */}
      <Route path="*" element={<div>Sayfa Bulunamadı</div>} />
    </Routes>
  );
}

export default App;