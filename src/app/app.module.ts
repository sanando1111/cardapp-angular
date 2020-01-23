import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpParams} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarddetailsComponent } from './component/carddetails/carddetails.component';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
const appRoutes: Routes = [
  { path: 'carddetails', component: CarddetailsComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'updateproduct', component: UpdateproductComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CarddetailsComponent,
    AddproductComponent,
    UpdateproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
