'use client'
import Projet2 from '@/components/Projet2'
import Projet1 from '@/components/Projet1'
import React, { useEffect, useState } from 'react'

const Page = () => {
  //  Recuperer l'identifiant du projet a partir de l'url
  const path = window?.location.pathname
  const [id, setId] = useState(path.split('/')[2])

  // Modifier l'identifiant si l'url change
  useEffect(() => {
    const newPath = window?.location.pathname
    setId(newPath.split('/')[2])
  }, [path])

  //  Afficher le projet correspondant a l'identifiant
  if (id == 1) {
    return <Projet1 />
  } else if (id == 2) {
    return <Projet2 />
  } else {
    //  Si l'identifiant n'est pas valide (1 ou 2)
    return <h1>Erreur 404: Projet non trouvé</h1>
  }
}

export default Page
