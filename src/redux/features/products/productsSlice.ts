import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductsState {
  searchTerm: string;
}

const initialState: ProductsState = {
  searchTerm: "",
};

// Create an API slice using RTK Query to fetch products
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetProductsQuery } = productsApi;

// Create a slice for managing search term state (optional)
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
