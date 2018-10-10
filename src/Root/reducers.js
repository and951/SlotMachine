import { combineReducers } from 'redux'

//import country from '../modules/Country/country'
//import SlotMachine from '../modules/SlotMachine/SlotMachine'

/**
What I found is that you should consider using Redux when:
    *Multiple React components needs to access the same state but do not have any parent/child relationship
    *Get awkward passing down the state to multiple components with props.
    
      For this project the flux pattern does not apply, although that here it is the main structure 
      in case the application design get bigger and then the project need more scalability.

 */
const reducers = combineReducers({

})

export default reducers
