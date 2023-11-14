export default (state = [], action) =>{
    switch(action.type){
        case 'FETCH_USER':
            return [...state, action.payload] //it will contain array of all the users
        default:
            return state
    }
};