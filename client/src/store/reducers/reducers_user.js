import {
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  GET_BY_PARENTID_START,
  GET_BY_PARENTID_SUCCESS,
  GET_BY_PARENTID_FAILED,
  UPDATE_PARENTID_START,
  UPDATE_PARENTID_SUCCESS,
  UPDATE_PARENTID_FAILED,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  AWARD_BONUS_START,
  AWARD_BONUS_SUCCESS,
  AWARD_BONUS_FAILED,
} from "../actions/action_user";

const initialState = {
  users: [],
  user: {},
  loading: false,
  success: false,
  singleLoading: false,
  singleSuccess: false,
  updateLoading: false,
  updateSuccess: false,
  usersLoading: false,
  usersSuccess: false,
  deleteLoading: false,
  deleteSuccess: false,
  awardSuccess: false,
  awardLoading: false,
  error: ""
}

const userReducers = ( state = initialState, action ) => {
  switch ( action.type ) {
    case GET_USER_START:
      return {
        ...state,
        singleLoading: true
      }
    case GET_USER_SUCCESS:
      return {
        ...state,
        singleSuccess: true,
        singleLoading: false,
        user: action.data
      }
    case GET_USER_FAILED:
      return {
        ...state,
        singleLoading: false,
        singleSuccess: false,
        error: action.error
      }
    case GET_USERS_START:
      return {
        ...state,
        usersLoading: true
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        usersSuccess: true,
        users: action.data
      }
    case GET_USERS_FAILED:
      return {
        ...state,
        usersLoading: false,
        usersSuccess: false,
        error: action.error
      }
    case DELETE_USER_START:
      return {
        ...state,
        deleteLoading: true
      }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteSuccess: true,
        users: action.data
      }
    case DELETE_USER_FAILED:
      return {
        ...state,
        deleteSuccess: false,
        deleteLoading: false,
        error: action.error
      }
    case GET_BY_PARENTID_START:
      return {
        ...state,
        loading: true,
      }
    case GET_BY_PARENTID_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        users: action.data,
      }
    case GET_BY_PARENTID_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      }
    case UPDATE_PARENTID_START:
      return {
        ...state,
        loading: true,
        success: false,
      }
    case UPDATE_PARENTID_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.data,
      }
    case UPDATE_PARENTID_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      }
    case UPDATE_USER_START:
      return {
        ...state,
        updateLoading: true,
       
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateLoading: false,
        updatesuccess: true,
        user: action.data,
      }
    case UPDATE_USER_FAILED:
      return {
        ...state,
        updateLoading: false,
        updatesuccess: false,
        error: action.error
      }
    case AWARD_BONUS_START:
      return {
        ...state,
        awardLoading: true
      }
    case AWARD_BONUS_SUCCESS:
      return {
        ...state,
        awardLoading: false,
        awardSuccess: true,
        user: action.data,
      }
    case AWARD_BONUS_FAILED:
      return {
        ...state,
        awardLoading: false,
        awardSuccess: false,
        error: action.error
      }
    default:
      return state;
  }
}

export default userReducers;