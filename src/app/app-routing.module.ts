import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  /**
   * The routes could yuse a resolver to fetch data before hand.
   * For simplicity reasons this is skipped and the data are fetched in the component.
   */
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      {
        path: 'detail/:personName',
        component: PeopleDetailComponent
      },
    ]
  },
  {
    path: '', redirectTo: '/people', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
