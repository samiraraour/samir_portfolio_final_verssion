import { useDispatch, useSelector } from 'react-redux'

//  Exporter les hooks pour les utiliser dans les composants pour acceder/gerer le store
export const useReduxDispatch = () => useDispatch()
export const useReduxSelector = useSelector
