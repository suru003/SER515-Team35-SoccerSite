import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CoachComponent } from './coach/coach.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { HeaderComponent } from './admin/header/header.component';
// import { FooterComponent } from './admin/footer/footer.component';
// import { SidebarComponent } from './admin/sidebar/sidebar.component';

const routes: Routes = [
  {path:'app-coach', component: CoachComponent},
  {path:'app-homepage', component: HomepageComponent},
  {path:'admin-home', children:[
      { path:'', component: AdminHomeComponent },
      // { path:'admin-header', component: HeaderComponent },
      // { path:'admin-footer', component: FooterComponent },
      // { path:'admin-sidebar', component: SidebarComponent }
    ]
  }, 
  {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
