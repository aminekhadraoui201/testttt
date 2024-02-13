import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './test/add/add.component';
import { UpdateComponent } from './test/update/update.component';
import { ListComponent } from './test/list/list.component';

const r: Routes = [
  {path:"",component:AddComponent},
  {path:"add",component:AddComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"list",component:ListComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(r)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
