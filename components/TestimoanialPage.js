'use client'
import React, { useState, useEffect } from 'react'
import './TestimoanialPage.css'
import { useReduxDispatch, useReduxSelector } from '@/redux/hooks'
import {
  addFeedback,
  deleteFeedback,
  setFeedback,
  updateFeedback,
} from '@/redux/slices/feedbackReducer'
import useFeedback from '@/hook/useFeedbackHook'

function TestimoanialPage() {
  const dispatch = useReduxDispatch()

  // Importer les feedbacks depuis le store et les mettre a jour avec le hook useFeedback (voir hook/useFeedbackHook.js)
  const feedbacks = useReduxSelector((state) => state.feedback.feedback)
  const { feedback } = useFeedback()

  // Initialiser une variable pour stocker les feedbacks qui seront modifies
  const [alteredFeedbacks, setAlteredFeedbacks] = useState(feedbacks)

  // Initialiser l'index du feedback qui sera modifie
  const [editingFeedbackIndex, setEditingFeedbackIndex] = useState(null)

  // Ajouter un exemple de feedback par defaut si il n'y a pas de feedbacks dans le store
  useEffect(() => {
    if (feedbacks.length === 0) {
      dispatch(
        addFeedback({
          id: new Date().getTime(),
          participant: 'John Doe',
          opinion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
          email: 'john@does.com',
        })
      )
    }
  }, [])

  // Cette fonction permet de selectionner le feedback qui sera modifie
  const initiateEdit = (index) => setEditingFeedbackIndex(index)

  // Cette fonction permet de sauvegarder le feedback modifie
  const saveFeedback = (feedback) => {
    // Mettre a jour les feedbacks dans le store
    dispatch(
      updateFeedback({
        id: feedback.id,
        participant: feedback.participant,
        opinion: alteredFeedbacks[editingFeedbackIndex].opinion,
        email: feedback.email,
      })
    )

    // Cacher le textarea
    setEditingFeedbackIndex(-1)
  }

  const removeFeedback = (id) => {
    dispatch(deleteFeedback({ id }))
  }

  const alterFeedback = (event, index) => {
    const value = event.target.value

    setAlteredFeedbacks(
      alteredFeedbacks.map((feedback, i) =>
        i === index ? { ...feedback, opinion: value } : feedback
      )
    )
  }

  // Enregistrer les feedbacks dans localStorage lorsqu'ils sont mis a jour
  useEffect(() => {
    dispatch(setFeedback(feedback))
  }, [feedback])

  // Mettre a jour alteredFeedbacks lorsqu'il y a des changements dans feedbacks
  useEffect(() => {
    setAlteredFeedbacks(feedbacks)
  }, [feedbacks])

  return (
    <div className='testimonials-container'>
      {alteredFeedbacks.map((feedback, index) => (
        <div key={index} className='testimonials-item'>
          <h2>{feedback.participant}</h2>
          {editingFeedbackIndex === index ? (
            <>
              <textarea
                className='testimonials-input'
                value={feedback.opinion}
                onChange={(event) => alterFeedback(event, index)}
              />
              <button onClick={() => saveFeedback(feedback)}>Save</button>
            </>
          ) : (
            <>
              <p>{feedback.opinion}</p>
              <button onClick={() => initiateEdit(index)}>Edit</button>
            </>
          )}
          <button onClick={() => removeFeedback(feedback.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default TestimoanialPage
