import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IPeople } from "../people/people.model";

export const selectPeople = createFeatureSelector<IPeople[]>('people');