import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BusTableComponent } from './components/bus-table/bus-table.component';
import { TitleComponent } from './components/title/title.component';
import { FormsModule } from '@angular/forms';
import { TableParentComponent } from './components/table-parent/table-parent.component';
import { FormComponent } from './components/form/form.component'; 
// import { ReactiveFormsModule } from '@angular/forms';
import{BusServiceService} from './services/bus-service.service'
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router'
import { appRoutes } from './routs';

@NgModule({
  declarations: [
    AppComponent,
    BusTableComponent,
    TitleComponent,
    TableParentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // ReactiveFormsModule
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BusServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



