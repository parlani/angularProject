import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./layouts/main/main.component";

const routes: Routes = [
  {
    path: '1',
    component: MainComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./+profile/profile.module').then(m => m.ProfileModule),
  }

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
