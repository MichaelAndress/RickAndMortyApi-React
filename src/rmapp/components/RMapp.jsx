import { useDispatch, useSelector } from 'react-redux';
import { Personajes } from './Personajes'
import { decrement, increment } from '../slice/counterSlice'
import { getPersonajesById } from '../helpers/thunks';
import { Hero } from './Hero';



export const RMapp = () => {

  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const siguiente =()=>{
    dispatch(increment())
  };
  const atras =()=>{
    dispatch(decrement())
  };
  getPersonajesById();
  

  return (
    <>
      <Hero />
      <button className='btn btn-success' onClick={ siguiente } >Siguente</button>
      <button className='btn btn-warning' onClick={ atras } disabled={counter===1} >Atras</button>
      <div className="container mt-4">
        <Personajes />
        
      </div>
    </>
  )
}
