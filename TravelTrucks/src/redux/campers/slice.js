import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperDetails } from './operations';

const initialState = {
  items: [],           // Katalog listesi
  currentCamper: null, // Detay sayfası için seçilen karavan
  isLoading: false,    // Yükleniyor göstergesi için
  error: null,         // Hata mesajı için
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    // Filtre değiştiğinde listeyi manuel temizlemek istersek diye
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // --- fetchCampers (Liste Getirme) ---
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        
        const { items, page } = action.payload;

        if (page === 1) {
          // Eğer 1. sayfa istenmişse, listeyi tamamen değiştir (Yeni filtre veya ilk yükleme)
          state.items = items;
        } else {

          state.items = [...state.items, ...items];
        }
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // --- fetchCamperDetails (Detay Getirme) ---
      .addCase(fetchCamperDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.currentCamper = null; // Önceki detayı temizle
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearItems } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;