import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "../common/shared.module";

import { CommonTablePaginationComponent } from "../common/components/common-table-pagination/common-table-pagination.component";
import { CommonTableComponent } from '../common/components/common-table/common-table.component';
import { BadgeComponent } from "../common/components/badge/badge.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [{ path: "dashboard", component: DashboardComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), NgxDatatableModule, NgbModule.forRoot()],
  declarations: [DashboardComponent, CommonTablePaginationComponent, BadgeComponent, CommonTableComponent],
  providers: []
})
export class DashboardModule { }