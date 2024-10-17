import { configureStore } from '@reduxjs/toolkit'
import reducer from './main.slice'

const store = configureStore({
	reducer
})

export default store

export type StateType = ReturnType<typeof store.getState>
