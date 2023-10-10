import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"work", component: WorkComponent},
  {path:"about", component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
