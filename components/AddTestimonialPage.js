import React, { useState } from 'react'
import './AddTestimonialPage.css'
import { addFeedback } from '@/redux/slices/feedbackReducer'
import { useReduxDispatch } from '@/redux/hooks'

function AddTestimonialPage() {
  const dispatch = useReduxDispatch()

  // Initialiser les valeurs des champs name, email et opinion
  const [participant, setParticipant] = useState('')
  const [email, setEmail] = useState('')
  const [opinion, setOpinion] = useState('')

  // Initialiser le message d'erreur
  const [warning, setWarning] = useState('')

  const submitfeedback = () => {
    if (participant === '' || email === '' || opinion === '') {
      setWarning('Il faut remplir les champs!')
      return
    }
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailValidation.test(email)) {
      setWarning('Adresse e-mail invalide!')
      return
    }
    dispatch(
      addFeedback({
        // generer un id unique avec Date
        id: new Date().getTime(),
        participant,
        email,
        opinion,
      })
    )

    setParticipant('')
    setEmail('')
    setOpinion('')
    setWarning('')
  }

  return (
    <form
      className='add-testimonial-container'
      onSubmit={(e) => {
        e.preventDefault()
        submitfeedback()
      }}
    >
      <input
        className='input-field'
        value={participant}
        onChange={(e) => setParticipant(e.target.value)}
        placeholder='Name'
      />
      <input
        className='input-field'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <textarea
        className='input-field'
        value={opinion}
        onChange={(e) => setOpinion(e.target.value)}
        placeholder='Feedback'
      />
      {warning && <p className='warning'>{warning}</p>}
      <button className='submit-button' type='submit'>
        Submit
      </button>
    </form>
  )
}

export default AddTestimonialPage
