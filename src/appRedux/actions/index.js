
import { createAction } from 'redux-actions';

export const ADD_TO_TEAM = "ADD_TO_TEAM"
export const REMOVE_FROM_TEAM = "REMOVE_FROM_TEAM"


export const AddToTeam = createAction(ADD_TO_TEAM);
export const RemoveFromTeam = createAction(REMOVE_FROM_TEAM);

