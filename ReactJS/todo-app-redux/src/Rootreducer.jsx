import {combineReducers} from 'redux'
import { operationsReducer } from './Redux/todoapp/reducers/operations'
export const Rootreducer=combineReducers({
    operationsReducer
})