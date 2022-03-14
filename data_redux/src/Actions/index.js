export const incNum = () => {
        console.log("inc.called");
    return{
        type:"INCREMENT"
    }
}

export const decNum = () => {
    console.log("dec.called");
    return{
        type:"DECREMENT"
    }
}

export const incByNum = (num) => {
    console.log(num);
    return{
        type:"BYNUM",
        data:parseInt(num)
    }
}