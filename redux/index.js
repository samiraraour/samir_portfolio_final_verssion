import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import feedbackReducer from './slices/feedbackReducer'

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
})

// Configurer les listeners pour les requetes
setupListeners(store.dispatch)
