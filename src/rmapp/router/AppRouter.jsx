import { Navigate, Route, Routes } from 'react-router-dom'
import { RMapp } from '../components/RMapp'
import { Perso } from '../components/Perso'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <RMapp /> }/>
        <Route path='/*' element={ <Navigate to='/' /> }/>
        <Route path='pj/:id' element={ <Perso /> }/>
      </Routes>  
    </>
  )
}
