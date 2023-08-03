//  Cette page doit utiliser le "use client" pour fonctionner correctement car elle utilise le "useState"
'use client'
import React, { useState } from 'react'
import './ContactPage.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ContactPage = () => {
  const router = useRouter()
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return re.test(email)
  }

  const validatePhone = (phone) => {
    const re = /^\d{10}$/
    return re.test(phone)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let errors = {
      name: formValues.name ? '' : 'Le nom est requis.',
      email: validateEmail(formValues.email) ? '' : 'Email invalide.',
      phone: validatePhone(formValues.phone)
        ? ''
        : 'Numéro de téléphone invalide.',
      message: formValues.message ? '' : 'Le message est requis.',
    }
    // S'il ya des erreurs, on les affiche
    if (errors.name || errors.email || errors.phone || errors.message) {
      setFormErrors(errors)
    }

    // Sinon on envoie le formulaire
    else {
      setFormValues({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
      setFormErrors({
        name: '',
        email: '',
        phone: '',
        message: '',
      })

   
    }
  }

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className='contact-container'>
      <Image
        src='/images/chat.png'
        alt='im'
        className='chat-image'
        width={200}
        height={200}
      />

      <h1>Contactez-moi {':)'}</h1>
      <form className='contact-form' onSubmit={handleSubmit}>
        <label className='contact-label'>Nom</label>
        <input
          type='text'
          className='contact-input'
          placeholder='Entrez votre nom'
          name='name'
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <div style={{ color: 'red' }}>{formErrors.name}</div>
        )}

        <label className='contact-label'>Email</label>
        <input
          type='email'
          className='contact-input'
          placeholder='Entrez votre email'
          name='email'
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <div style={{ color: 'red' }}>{formErrors.email}</div>
        )}

        <label className='contact-label'>Numéro de téléphone</label>
        <input
          type='tel'
          className='contact-input'
          placeholder='Entrez votre numéro de téléphone'
          name='phone'
          value={formValues.phone}
          onChange={handleChange}
        />
        {formErrors.phone && (
          <div style={{ color: 'red' }}>{formErrors.phone}</div>
        )}

        <label className='contact-label'>Message</label>
        <textarea
          rows={3}
          className='contact-textarea'
          placeholder='Entrez votre message'
          name='message'
          value={formValues.message}
          onChange={handleChange}
        />
        {formErrors.message && (
          <div style={{ color: 'red' }}>{formErrors.message}</div>
        )}

        <button type='submit' className='contact-button'>
          Envoyer
        </button>
      </form>
    </div>
  )
}

export default ContactPage
