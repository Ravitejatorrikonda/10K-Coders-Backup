import { createStore } from "redux"
import { Rootreducer} from "./Rootreducer"
export const store=createStore(
    Rootreducer, 
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())