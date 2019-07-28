const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter : 0
}

// store

//reducer
const rootReducer = (state= initialState, action) => {
    if(action.type ==  'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter+1
        }
        
    }
    if(action.type ==  'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter+10 
        }
        
    }
    return state
}
// create store
const store = createStore(rootReducer);
//subscription
store.subscribe(()=>{
    console.log('[Subscription]', store.getState())
})

// dispatcher
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10})



