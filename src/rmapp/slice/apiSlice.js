import { createSlice } from '@reduxjs/toolkit';



export const apiSlice = createSlice({
  name: 'api',
  initialState:{ 
    personajes:[],
    personajeById:{}
  },  
  reducers: {
    getPJ: (state, {payload}) => {
        state.personajes = payload.personaje;
    },
    getPJById: (state, {payload})=>{
      state.personajeById = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { getPJ, getPJById } = apiSlice.actions;