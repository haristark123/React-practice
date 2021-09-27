import {createSlice} from '@reduxjs/toolkit'

const uiSlice=createSlice({
    name:'UI',
    initialState:{
        cartVisible:false,
        notification:false,
        loading:false
    },
    reducers:{
        toggle(state){
            state.cartVisible=!state.cartVisible
        },
        setLoading(state,action){
            state.loading=action.payload
        },
        showNotification(state,action){
            state.notification={
                status:action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
});

export const uiAction=uiSlice.actions
export default uiSlice