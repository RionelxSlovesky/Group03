import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_RESET,
    UPDATE_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    CLEAR_ERRORS 
   } from '../constants/productConstants'

export const getProducts = (keyword = '', currentPage = 1, price, category, rating = 0) => async (dispatch) => {
    try{

         dispatch({ type: ALL_PRODUCTS_REQUEST })
         let x = currentPage;
         let z = keyword;
         let m = price[1];
         let n = price[0];
         let c = category;
         let r = rating;
         

         let link = '/api/v1/products?keyword=' + z + '&page=' + x + '&price[lte]=' + m + '&price[gte]=' + n + '&ratings[gte]=' + r;

         if(category){
            link = '/api/v1/products?keyword=' + z + '&page=' + x + '&price[lte]=' + m + '&price[gte]=' + n + '&category=' + c + '&ratings[gte]=' + r;
         }
  
         const { data } = await axios.get(link)

         dispatch({
             type: ALL_PRODUCTS_SUCCESS,
             payload: data
         })

    } catch(error){
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
         } )
    }

   }

export const getProductDetails = (id) => async (dispatch) => {
    try{

         dispatch({ type: PRODUCT_DETAILS_REQUEST })

         let y = id;
         let str2 = '/api/v1/product/' + y;

         const { data } = await axios.get(str2)

         dispatch({
             type: PRODUCT_DETAILS_SUCCESS,
             payload: data.product
         })

    } catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
         } )
    }

   }

   // Delete product (Admin)
export const deleteProduct = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_PRODUCT_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/product/${id}`)

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

// Update Product (ADMIN)
export const updateProduct = (id, productData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PRODUCT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/product/${id}`, productData, config)

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

   export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/review`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

export const newProduct = (productData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_PRODUCT_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/admin/product/new`, productData, config)

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAdminProducts = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_PRODUCTS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/products`)

        dispatch({
            type: ADMIN_PRODUCTS_SUCCESS,
            payload: data.products
        })

    } catch (error) {

        dispatch({
            type: ADMIN_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

   //Clear errors

   export const clearErrors = () => async (dispatch) => {
       dispatch({
           type: CLEAR_ERRORS
           
       })
   }

   