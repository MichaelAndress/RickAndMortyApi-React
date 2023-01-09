import { createSlice } from '@reduxjs/toolkit';



export const counterSlice = createSlice({
  name: 'counter',
  initialState:{ counter :1 },
  reducers: {
    increment: (state, {payload}) => {
      state.counter +=1 ;

    },
    decrement: (state)=>{
       state.counter -=1;
    },
    increment2:(state, action)=>{
      state.counter += action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, increment2 } = counterSlice.actions;