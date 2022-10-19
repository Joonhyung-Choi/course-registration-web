export const getUserData = () => ({type:'SET_USERDATA', str:''});

const initState={
    str:'mayo'
}

export const reducer = (state=initState, action) => {
    switch (action.type){
        case 'SET_USERDATA':
            return {str:state.str}
        default:
            return state;
    }
}
export default reducer;