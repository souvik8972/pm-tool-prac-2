import { configureStore } from '@reduxjs/toolkit'
import clientSlice from '../features/client/clientSlice'


export const store = configureStore({
  reducer: {
    client: clientSlice,
    
  },
})