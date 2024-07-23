import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {reducer as bookReducer, reducer} from "./slice/bookSlice"
import {reducer as orderReducer} from "./slice/bookOrderSlice"
import {reducer as studentReducer} from "./slice/StudentSlice"


export type RootState = ReturnType<typeof root>;

// Cau hinh
 const store:any = configureStore({reducer: {
    student: studentReducer
 }})
 export default store;