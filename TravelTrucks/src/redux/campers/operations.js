import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Axios için temel URL ayarı
axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

// 1. Tüm Karavanları Getir (Filtreleme ve Sayfalandırma ile)
export const fetchCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, filters = {} }, thunkAPI) => {
    try {
      // URL Parametrelerini oluşturuyoruz
      const params = new URLSearchParams({
        page,
        limit: 4, // Her seferinde 4 kart yüklenecek (Load More için)
      });

      // Filtreleri döngüye alıp URL'e ekliyoruz
      // Örn: filters = { location: 'Kyiv', form: 'alcove', AC: true }
      Object.keys(filters).forEach((key) => {
        if (filters[key]) {
          params.append(key, filters[key]);
        }
      });

      // İsteği gönder
      const response = await axios.get(`/campers?${params.toString()}`);
      
      // Hem veriyi hem de hangi sayfa olduğunu payload olarak döndürüyoruz
      // Bu, slice içinde veriyi "eklemek" mi yoksa "değiştirmek" mi gerektiğini anlamamızı sağlayacak.
      return { items: response.data, page }; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 2. Tek Bir Karavanın Detayını Getir (Detay Sayfası için)
export const fetchCamperDetails = createAsyncThunk(
  'campers/fetchDetails',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);