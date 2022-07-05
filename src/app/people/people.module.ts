import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PeopleComponent } from "./people.component";
import { SplitterModule } from "primeng/splitter";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SplitterModule,
    ButtonModule,
    CardModule,
    RouterModule
  ],
  declarations: [
    PeopleComponent,
    PeopleDetailComponent
  ],
  exports: [PeopleComponent, PeopleDetailComponent],
  providers: [],
})
export class PeopleModule { }