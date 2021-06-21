import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {
  //   path: 'home', loadChildren: () => import('./medical/medical-data/medical-data.module').then(
  //     m => m.MedicalDataModule
  //   )
  // }
=======
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', loadChildren: () => import('./Task/project/project.module').then(
      m => m.ProjectModule    )
  }
>>>>>>> a3aa39e8c9e5d7388570e8bff27fab6ef6ed9a77
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
