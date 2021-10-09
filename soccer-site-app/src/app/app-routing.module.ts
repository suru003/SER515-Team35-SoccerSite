import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CoachComponent } from './coach/coach.component';
// import { HomepageComponent } from './homepage/homepage.component';

// import { HeaderComponent } from './admin/header/header.component';
// import { FooterComponent } from './admin/footer/footer.component';
// import { SidebarComponent } from './admin/sidebar/sidebar.component';

import { UserListComponent } from './user-list/user-list.component';
import { AddRefereeComponent } from './addReferee/addReferee.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { RefereeDirectorComponent } from './refereeDirector/refereeDirectorHomepage.component';
import { RefereeUserListComponent } from './referee-user-list/referee-user-list.component';

const routes: Routes = [
  {path:'app-coach', component: CoachComponent},
  // {path:'app-homepage', component: HomepageComponent},
  {path:'admin-home', children:[
      { path:'', component: AdminHomeComponent },
      // { path:'admin-header', component: HeaderComponent },
      // { path:'admin-footer', component: FooterComponent },
      // { path:'admin-sidebar', component: SidebarComponent }
    ]
  }, 
  // {path:'allusers', component: UserListComponent},
  // {path:'add-referee', component: AddRefereeComponent},
  {path:'loginPage', component: LoginPageComponent},
  {path:'refereeDirectorHomepage', component: RefereeDirectorComponent,
  children: [
      {
        path:'referee-user-list', component: RefereeUserListComponent
      },
      {
        path:'add-referee', component: AddRefereeComponent
      }
    ]

}
  // {path:'', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [RefereeDirectorComponent, 
  UserListComponent, LoginPageComponent,
  AddRefereeComponent,RefereeUserListComponent]
