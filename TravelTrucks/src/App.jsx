import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './components/CatalogPage/CatalogPage';
import CamperDetailsPage from './components/CamperDetailsPage/CamperDetailsPage';

function App() {
  return (
    <Routes>
      {/* Tüm sayfaları sarmalayan Layout */}
      <Route path="/" element={<Layout />}>
        
        {/* Layout'un içindeki <Outlet /> kısmına yerleşecek alt sayfalar */}
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperDetailsPage />} />
        
      </Route>

      {/* Yanlış veya var olmayan bir URL girilirse otomatik olarak Ana Sayfaya yönlendir */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;