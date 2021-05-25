//Імпортуємо actions константи з папки action-type
import {
  START_POSTS_LOADING,
  STOP_POSTS_LOADING,
  SET_POSTS,
  SET_POSTS_ERROR
} from "../action-type";
//спочатку initialState має статус undefined
const initialState = {
  //в posts буде зберігатися пости, на початку порожній масив
  posts: [],
  isPostsLoading: false,
  error: ""
};

//експортуємо postsReducer
//в state присвоюємо initialState
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_POSTS_LOADING: {
      return {
        ...state, // клонуємо все, що є в state
        isPostsLoading: true
      };
    }
    case STOP_POSTS_LOADING: {
      return {
        ...state, // клонуємо все, що є в state
        isPostsLoading: false
      };
    }
    case SET_POSTS: {
      return {
        ...state, // клонуємо все, що є в state
        posts: action.payload
      };
    }
    case SET_POSTS_ERROR: {
      return {
        ...state, // клонуємо все, що є в state
        error: action.payload
      };
    }
    default:
      return state; // після повернення в initialState зберігається те, що потрапило в state
  }
};
