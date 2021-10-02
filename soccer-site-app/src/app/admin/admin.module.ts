import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from './admin-home/sidebar/sidebar.component';
import { HeaderComponent } from './admin-home/header/header.component';
import { FooterComponent } from './admin-home/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'


@NgModule({
  declarations: [AdminHomeComponent, SidebarComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatListModule
  ],
  exports: [
    AdminHomeComponent
  ]
})
export class AdminModule { }
