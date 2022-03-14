const initVal = 0
const ChangeNumber = (state=initVal,action) =>{
    switch(action.type){
        case "INCREMENT":
            console.log(state+1);
            return state+1;

        case "DECREMENT":
            console.log(state-1);
            return state-1;

        case "BYNUM":
            console.log(action.data);
            return state+action.data;

        default:
            return state;
    }
}
export default ChangeNumber;