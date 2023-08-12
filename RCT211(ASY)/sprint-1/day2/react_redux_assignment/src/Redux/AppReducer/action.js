import * as types from "./actionTypes";

const gettodosrequest=()=>{
    return{
        type:types.GET_TODOS_REQUEST,

    }
}


const gettodossuccess=(payload)=>{
    return{
        type:types.GET_TODOS_SUCCESS,
        payload,
        
    }
}

const gettodosfailure=()=>{
    return{
        type:types.GET_TODOS_FAILURE,
        
    }
}

const addtodosrequest=()=>{
    return{
        type:types.ADD_TODOS_REQUEST,

    }
}


const addtodossuccess=(payload)=>{
    return{
        type:types.ADD_TODOS_SUCCESS,
        payload,
        
    }
}

const addtodosfailure=()=>{
    return{
        type:types.ADD_TODOS_FAILURE,
        
    }
}

const deletetodosrequest=()=>{
    return{
        type:types.DELETE_TODOS_REQUEST,

    }
}


const deletetodossuccess=(payload)=>{
    return{
        type:types.DELETE_TODOS_SUCCESS,
        payload,
        
    }
}

const deletetodosfailure=()=>{
    return{
        type:types.DELETE_TODOS_FAILURE,
        
    }
}
const updatetodorequest=()=>{
    return {
        type:types.UPDATE_TODOS_REQUEST
    }
}

const updatetodosuccess=(payload)=>{
    return {
        type:types.UPDATE_TODOS_SUCCESS,
        payload
    }
}

const updatetodofailure=()=>{
    return {
        type:types.UPDATE_TODOS_FAILURE
    }
}


export {gettodosrequest,gettodossuccess,gettodosfailure,addtodosrequest,addtodossuccess,addtodosfailure,deletetodosrequest,deletetodossuccess,deletetodosfailure,updatetodorequest,updatetodosuccess,updatetodofailure}