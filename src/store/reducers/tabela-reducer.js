const INITIAL_STATE = {
    number: '',
    coment: ''
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        
        case 'SET_COMENT':
            return { ...state, coment: action.payload }

        default:
            return state
    }
}