import { createReducer, on } from "@ngrx/store";
import { getPeople } from "./people.actions";
import { IPeople } from "../people/people.model";

export const initialState: ReadonlyArray<IPeople> = [];

export const peopleReducer = createReducer(
    initialState,
    on(getPeople, (state, {people}) => people)
);