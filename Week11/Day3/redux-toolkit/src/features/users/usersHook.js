import { useDispatch, useSelector } from "react-redux";
import { selectUsersSelector} from "./usersSelector";
import { fetchUsers } from "./usersSlice";
import { useCallback } from "react";

export const useSelectUsersSelector = () => {
    return useSelector(selectUsersSelector)
}

export const useFetchUsers = () => {
    const dispatch = useDispatch();
    return useCallback(()=>{
        dispatch(fetchUsers());
    },[dispatch])
} 