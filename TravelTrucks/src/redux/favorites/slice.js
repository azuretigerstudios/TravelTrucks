import { createSlice } from '@reduxjs/toolkit';

// Başlangıçta localStorage'ı kontrol et, yoksa boş dizi dön
const loadFavorites = () => {
  const saved = localStorage.getItem('favorites');
  return saved ? JSON.parse(saved) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: loadFavorites(),
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const camper = action.payload;
      const existsIndex = state.items.findIndex((item) => item.id === camper.id);
      
      if (existsIndex >= 0) {
        // Zaten favorilerdeyse çıkar
        state.items.splice(existsIndex, 1);
      } else {
        // Yoksa ekle
        state.items.push(camper);
      }
      
      // Her değişiklikte localStorage'ı güncelle
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;