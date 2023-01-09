import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersojaes } from "../helpers/thunks";
import { Cards } from "./Cards";


export const Personajes = () => {

  const { personajes } = useSelector(state => state.api);
  const { counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();


  
  useEffect(() => {
    dispatch(getPersojaes(counter));
  }, [counter])
  

  return (
    <>
      
    {
      personajes.map(pj=>(
        <Cards key={ pj.id }{...pj} />
      ))
    }

    </>
  )
}
