import {configureStore} from '@reduxjs/toolkit'
import infoReducer from './Functions'
export const Store=configureStore({
    reducer:infoReducer
});