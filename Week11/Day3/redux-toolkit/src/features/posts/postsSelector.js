import {createSelector} from '@reduxjs/toolkit';

import { selectPosts, selectStatus } from './postsSlice';

export const selectPostsSelector = createSelector(selectPosts, (posts) => {
    return posts;
});

export const postsStatusSelector = createSelector(selectStatus, (status) => {
    return status;
});

