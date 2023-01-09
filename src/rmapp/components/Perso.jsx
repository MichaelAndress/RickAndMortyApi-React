import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getPersonajesById } from "../helpers/thunks"
import { Hero } from "./Hero";

export const Perso = () => {

  const params = useParams();
  const { personajeById } = useSelector(state=>state.api)
  const {name, image, gender, species, status} = personajeById;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonajesById(params.id));
  }, [])
  

  return (
    <>
    <Hero/>
    <div className="container">
        <div className="card border border-success mt-5 p-3 mb-5 animate__animated animate__fadeInLeft">
        <img src={ image } className=" img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title text-center text-s fs-1">{ name }</h5>
          <hr />
          <ul className="fs-4">
            <li>{ gender }</li>
            <li>{ species }</li>
            <li>{ status }</li>
          </ul>
        </div>
      </div>
    </div>

    </>
  )
}
