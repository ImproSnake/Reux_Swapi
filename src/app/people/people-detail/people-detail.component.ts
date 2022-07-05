import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectPeople} from 'src/app/state/people.selectors';
import { IPeople } from '../people.model';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {
  /**
   * CTOR.
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store
  ) {}

  /**
   * The person name from the route params.
   */
  public person?: IPeople;

  /**
   * Angular on init lifecycle hook.
   */
  ngOnInit(): void {
    this.route.params.subscribe((val) => {
      this.store.select(selectPeople).subscribe((people) => this.person = people.find((person) => person.name === val['personName']));
    })
  }
}
