import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeople } from './people.model';
import { PeopleService } from '../people/people.service';
import { getPeople } from '../state/people.actions';
import { selectPeople } from '../state/people.selectors';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  /**
   * CTOR.
   */
  constructor (
    private peopleService: PeopleService,
    private store: Store,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  /**
   * The people observable.
   */
   public people$: Observable<IPeople[]> = this.store.select(selectPeople);

  /**
   * Angular On Init lifecycle hook.
   */
  public ngOnInit(): void {
    this.peopleService
    .getPeople()
    .subscribe((people) => this.store.dispatch(getPeople({people})));
  }
}
