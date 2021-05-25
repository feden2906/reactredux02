import {
  START_POSTS_LOADING,
  SET_POSTS,
  STOP_POSTS_LOADING,
  SET_POSTS_ERROR
} from "../action-type";

export const startPostsLoading = () => ({ type: START_POSTS_LOADING });
export const setPosts = (payload) => ({ type: SET_POSTS, payload });
export const stoptPostsLoading = () => ({ type: STOP_POSTS_LOADING });
export const setPostsError = (payload) => ({ type: SET_POSTS_ERROR, payload });
