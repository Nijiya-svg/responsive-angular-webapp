import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { StartersComponent } from './categories/starters/starters.component';
import { DessertsComponent } from './categories/desserts/desserts.component';
import { MaincourseComponent } from './categories/maincourse/maincourse.component';
import { ContactComponent } from './contact/contact.component';
// import { StartersComponent } from "./app/pages/categories/starters.component";
// import { MainCourseComponent } from "./app/pages/categories/main-course.component";
// import { DessertsComponent } from "./app/pages/categories/desserts.component";
// import { ContactComponent } from "./app/pages/contact/contact.component";

export const routes: Routes = [
{ path: '', component: HomeComponent }, 
  { path: 'menu', component: MenuComponent },
  { path: 'categories/starters', component: StartersComponent },
  { path: 'categories/main-course', component: MaincourseComponent },
  { path: 'categories/desserts', component: DessertsComponent },
  { path: 'contact',component:ContactComponent }
];
