const initialState = {
    valueNumber: 0
}
const ADDVALUE = 'ADDVALUE';
const DECREASEVALUE = 'DECREASEVALUE';

export {ADDVALUE, DECREASEVALUE}

export default (state=initialState, action = {}) => {
    switch(action.type){
        case ADDVALUE:
            return Object.assign( {}, state, { valueNumber: state.valueNumber + 1 } )
        
        case DECREASEVALUE:
            return Object.assign( {}, state, { valueNumber: state.valueNumber - 1 } )

        default:
            return state;
    }
}