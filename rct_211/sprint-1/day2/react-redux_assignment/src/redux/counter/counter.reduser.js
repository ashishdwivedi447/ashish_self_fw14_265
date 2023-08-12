import { INC_COUNT ,DEC_COUNT} from "./counter.action";

const initState={
    counter:0
}

export const counterReduser=(state=initState,{type,payload})=>{
    switch(type){

        case INC_COUNT:
            return {...state,counter:state.counter+payload}
            case DEC_COUNT:
                return {...state,counter:state.counter+payload}
        default:
            return state;
    }

}