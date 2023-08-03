import { useEffect, useState } from 'react'

// Le useFeedbackHook permet de recuperer les feedbacks depuis localStorage et de les mettre a jour lorsqu'ils sont modifies dans le store (redux)

export default function useFeedback() {
  //  Recuperer les feedbacks a partir de localStorage
  const getFeedbacks = () => {
    const feedbacksString =
      typeof window !== 'undefined' ? localStorage.getItem('feedback') : null

    //  Si il n'y a pas de feedbacks dans localStorage, on retourne un objet avec une liste vide
    const localeStorageFeedbacks = JSON.parse(
      feedbacksString ||
        JSON.stringify({
          items: [],
        })
    )
    return localeStorageFeedbacks
  }

  const [feedback, setFeedbacks] = useState(getFeedbacks())

  //  Enregistrer les feedbacks dans localStorage lorsqu'ils sont mis a jour
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback))
  }, [feedback])

  //  Mettre a jour les feedbacks
  const saveFeedbacks = (localeStorageFeedbacks) => {
    localStorage.setItem('feedback', JSON.stringify(localeStorageFeedbacks))
    setFeedbacks(localeStorageFeedbacks)
  }

  //  Retourner la liste des feedbacks et la fonction pour les mettre a jour
  return {
    setFeedbacks: saveFeedbacks,
    feedback,
  }
}