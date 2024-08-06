import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './view/view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { AddingComponent } from './adding/adding.component';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { FindComponent } from './find/find.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: 'add',
    component: AddingComponent,
  },
  {
    path: 'find',
    component: FindComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewComponent,
    SidebarComponent,
    AddingComponent,
    FindComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
