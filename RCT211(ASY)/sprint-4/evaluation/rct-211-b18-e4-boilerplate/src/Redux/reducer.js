import * as types from "./actionTypes"


const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {

  const {type,payload}=action;
  
  switch(type){
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading:true,
        isError:false
      }
      case types.GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          products:payload,
          isLoading:false,
          isError:false
        }
        case types.GET_PRODUCTS_REQUEST:
          return {
            ...state,
            isLoading:false,
            isError:true
          }

          case types.ADD_PRODUCT_REQUEST:
            return {
              ...state,
              isLoading:false,
              isError:false,
            }

            case types.ADD_PRODUCT_SUCCESS:
            return {
              ...state,
              products:[...state.products,payload],
              isLoading:false,
              isError:false,
            }
            case types.ADD_PRODUCT_FAILURE:
            return {
              ...state,
              isLoading:false,
              isError:false,
            }

            case types.EDIT_PRODUCT_REQUEST:
              return {
                ...state,
                isLoading:false,
                isError:false
              }
    
              case types.EDIT_PRODUCT_SUCCESS:
                let updated=state.products.map((item)=>item.id==payload.id ? payload :item)
                //console.log(updated);
                return {
                  ...state,
                  products:updated,
                  isLoading:false,
                  isError:false
                }
    
                case types.EDIT_PRODUCT_FAILURE:
                  return {
                    ...state,
                    isLoading:false,
                    isError:true
                  }
    default:
      return state
  }
};
