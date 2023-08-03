'use client'

import { Provider } from 'react-redux'
import { store } from '.'

//  Provider pour le store redux, pour que les composants puissent y acceder
export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
