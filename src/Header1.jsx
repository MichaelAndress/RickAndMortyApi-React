// import { Navigate, Route, Routes } from 'react-router-dom';
// import { RMapp } from '../../RMapp';
// import { Pej } from './Pej'

import { AppRouter } from "./rmapp/router/AppRouter"



export const Header1 = () => {
  return (
    <>
    {/* <header className='header'>
        <h1>Rick and Morty</h1>
    </header> */}

    <AppRouter/>
{/*     
    <Routes>
      <Route path='pj/:id' element={ <Pej /> } />
      <Route path='/*' element={ <RMapp /> } />
      <Route path='/*' element={ <Navigate to='/' /> } />
      
    </Routes> */}
    </>
  )
}
