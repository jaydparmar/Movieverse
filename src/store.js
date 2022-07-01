import {configureStore} from "@reduxjs/toolkit"
import userCounter from '../src/Features/UserSlice.js'


export default configureStore({
    reducer:{
        user :userCounter,
    },
})