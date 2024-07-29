import { PRODUCTS_URL, UPLOAD_URL } from "../constants";
import {apiSlice} from './apiSlice';

export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ keyword, pageNumber }) => ({
              url: PRODUCTS_URL,
              params: { keyword, pageNumber },
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Products'],
          }),
        getProductDetails: builder.query({
            query: (productId) => ({url: `${PRODUCTS_URL}/${productId}`}),
            keepUnusedDataFor: 5,
        }),
        createProduct: builder.mutation({
            query: (product) => ({
                url: PRODUCTS_URL,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Products'],
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
               url: `${PRODUCTS_URL}/${data._id}`,
               method: 'PUT',
               body: data 
            }),
            invalidatesTags: ['Products'],
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: `${UPLOAD_URL}`,
                method: 'POST',
                body: data,
            })
        }),
        deleteProduct: builder.mutation({
            query: (_id) => ({
                url: `${PRODUCTS_URL}/${_id}`,
                method: 'DELETE',
            }),
        }),
        createReview: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data._id}/reviews`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Product']
        }),
        getTopProducts: builder.query({
            query: () => ({url: `${PRODUCTS_URL}/top`}),
            keepUnusedDataFor: 5,
        }),
    })
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useCreateProductMutation, useUpdateProductMutation, useUploadProductImageMutation, useDeleteProductMutation, useCreateReviewMutation, useGetTopProductsQuery} = productsApi;