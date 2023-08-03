import { createSlice } from '@reduxjs/toolkit'

// Definir l'etat initial pour l'objet global des feedbacks
const initialState = {
  feedback: [],
  testimonial: {},
}

// Definir les actions pour les feedbacks
export const feedbackReducer = createSlice({
  // Nom du redux slice
  name: 'feedback',

  // Etat initial
  initialState,

  // La liste des actions
  reducers: {
    setFeedback: (state, action) => {
      state.feedback = action.payload

      localStorage.setItem('feedback', JSON.stringify(action.payload))
    },

    getAllFeedbacks: (state, action) => {
      state.feedback = action.payload
    },

    getOneFeedback: (state, action) => {
      state.testimonial = state.feedback.find(
        (testimonial) => testimonial.id === action.payload.id
      )
    },

    addFeedback: (state, action) => {
      state.feedback.push(action.payload)

      localStorage.setItem('feedback', JSON.stringify(state.feedback))
    },

    updateFeedback: (state, action) => {
      const newFeedback = state.feedback?.map((testimonial) =>
        testimonial.id == action.payload.id ? action.payload : testimonial
      )

      state.feedback = newFeedback

      localStorage.setItem('feedback', JSON.stringify(newFeedback))
    },

    deleteFeedback: (state, action) => {
      const newFeedback = state.feedback.filter(
        (testimonial) => testimonial.id !== action.payload.id
      )
      state.feedback = newFeedback

      localStorage.setItem('feedback', JSON.stringify(newFeedback))
    },
  },
})

// Exporter le reducer pour l'utiliser dans le store
export default feedbackReducer.reducer

// Exporter les actions pour les utiliser dans les composants
export const {
  getAllFeedbacks,
  getOneFeedback,
  addFeedback,
  updateFeedback,
  deleteFeedback,
  setFeedback,
} = feedbackReducer.actions
