import { useSelector } from "react-redux";
import { ramApi } from "../../api/ramApi";
import { getPJ, getPJById } from "../slice/apiSlice";

export const getPersojaes= (counter)=>{
    return async (dispatch)=>{

        // const resp = await fetch(`https://rickandmortyapi.com/api/character/?page=${counter}`)
        // const { results } = await resp.json();
        const resp = await ramApi.get(`/?page=${counter}`)
        const { data } = resp;
        
        const personaje = data.results.map(pj=>({
          id: pj.id,
          name: pj.name,
          image: pj.image
        }));

        dispatch(getPJ({personaje}))

    }
}

export const getPersonajesById= (ide)=>{
    return async(dispatch)=>{
        // const resp = await fetch(`https://rickandmortyapi.com/api/character/${ide}`)
        // const data = await resp.json();
        const resp = await ramApi.get(`/${ide}`)
        const { data } = resp;
        console.log(data);
        const personaje = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status
          };


        dispatch(getPJById(personaje))

    }
}