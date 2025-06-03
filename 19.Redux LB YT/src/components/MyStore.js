import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './MySlice.js'

export const store= configureStore({
  reducer: {
    counter: counterReducer
  
  }
})
// OR directly export configureStore ..but then mmodify all import to import configureStore n not {store}

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })
