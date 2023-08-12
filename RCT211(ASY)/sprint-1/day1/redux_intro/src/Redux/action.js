


const handleincrement=()=>{
    return {
        type:"INCREMENT",
        payload:1,
    }
}


const handledecrement=()=>{
    return {
        type:"DECREMENT",
        payload:1,
    }
}

export {handleincrement,handledecrement}