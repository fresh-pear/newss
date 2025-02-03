import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from 'axios';

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (categories) => {
    try{
      const query = categories === "All" ? '' : `&category=${categories}`;
      const response = await axios.get(
        `https://newsdata.io/api/1/latest?country=kr${query}&apikey=pub_64514145f388c20418b696967cabddc140adb`
      );
      return response.data.results;
    } catch (error) {
      throw new Error(error.message || "데이터 실패")
    }
  }
);

export const newsSlice = createSlice ({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchNews.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchNews.fulfilled,(state, action) => {
      state.status = "succeeded"
      state.articles = action.payload
    })
    .addCase(fetchNews.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default newsSlice.reducer