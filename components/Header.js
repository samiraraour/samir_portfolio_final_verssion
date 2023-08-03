import React from 'react'
import './Header.css'
import Link from 'next/link'

function Header() {
  return (
    <header className='header'>
      <Link href='/' className='header-brand'>
        Portfolio
      </Link>
      <nav className='header-nav'>
        <Link href='/projets/1' className='header-link'>
          Projet 1
        </Link>
        <Link href='/projets/2' className='header-link'>
          Projet 2
        </Link>
        <Link href='/contact' className='header-link'>
          Contact
        </Link>
        <div className='header-dropdown'>
          <span className='header-link'>Témoignages</span>
          <div className='header-dropdown-content'>
            <Link href='/testimonials' className='header-dropdown-item'>
              Voir
            </Link>
            <Link href='/add-testimonial' className='header-dropdown-item'>
              Ajouter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
