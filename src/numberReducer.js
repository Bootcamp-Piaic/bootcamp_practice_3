const numberReducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return state + action.val
        case 'decrement':
            return state - action.val
		default:
			throw new Error();
    }
}
export default numberReducer