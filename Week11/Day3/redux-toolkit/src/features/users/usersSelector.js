import { createSelector } from "@reduxjs/toolkit";

import {selectUsers} from './usersSlice';

export const selectUsersSelector = createSelector(selectUsers, (users)=>{
    return users;
});