import { useDispatch, useSelector } from "react-redux";

import { selectPostsSelector, postsStatusSelector } from "./postsSelector";

import { fetchPosts } from "./postsSlice";
import { useCallback } from "react";

export const useSelectPostsSelector = () => {
    return useSelector(selectPostsSelector);
};

export const usePostsStatusSelector = () => {
    return useSelector(postsStatusSelector);
};

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
}