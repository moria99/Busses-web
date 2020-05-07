import { Routes } from '@angular/router'
import {BusTableComponent} from './components/bus-table/bus-table.component'
import {FormComponent } from './components/form/form.component'
import {TableParentComponent} from './components/table-parent/table-parent.component'

export const appRoutes: Routes = [
    { path: 'busTable', component: BusTableComponent },
    { path: 'form', component: FormComponent },
    { path: 'tableParetn',component: TableParentComponent}
  ];
