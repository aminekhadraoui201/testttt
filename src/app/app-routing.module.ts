import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './test/add/add.component';
import { UpdateComponent } from './test/update/update.component';
import { ListComponent } from './test/list/list.component';
import { AdddepotComponent } from './depot/adddepot/adddepot.component';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { AdminLayoutComponent } from './back/layouts/admin-layout/admin-layout.component';
import { AdminLayout1Component } from './front/layouts/admin-layout1/admin-layout1.component';
import { HomeComponent } from './shared/home/home.component';
import { AccueilComponent } from './shared/accueil/accueil.component';
import {LoginComponent} from './shared/login/login.component';


const r: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},



  // {path:"add",component:AddComponent},
  // {path:"update/:id",component:UpdateComponent},
  // {path:"adddepot",component:AdddepotComponent}

  {
    path: 'back',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/back/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: 'front',
    component: AdminLayout1Component,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/front/layouts/admin-layout1/admin-layout1.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  

];

@NgModule({
  imports: 
  [RouterModule.forRoot(r),
  CommonModule,
  BrowserModule],

 exports: [RouterModule]
})
export class AppRoutingModule { }
