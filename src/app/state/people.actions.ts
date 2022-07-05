import { createAction, props } from '@ngrx/store';
import { IPeople } from '../people/people.model';

/**
 * Action to fetch the People from the SWAPI.
 */
export const getPeople = createAction (
    'getPeople',
    props<{people: IPeople[]}>()
);