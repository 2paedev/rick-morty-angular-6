import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SharedModule } from "../common/shared.module";

import { CommonTableComponent } from "../common/components/common-table/common-table.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [{ path: "dashboard", component: DashboardComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), NgxDatatableModule],
  declarations: [DashboardComponent, CommonTableComponent],
  providers: []
})
export class DashboardModule {}
