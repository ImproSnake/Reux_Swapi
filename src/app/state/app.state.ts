import { IPeople } from "../people/people.model";

export interface IAppState {
    people: ReadonlyArray<IPeople>;
}