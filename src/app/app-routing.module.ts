import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BandasComponent } from './pages/bandas/bandas.component';
import { LoginComponent } from './pages/login/login.component';
import { AngraComponent } from './pages/angra/angra.component';
import { ArchEnemyComponent } from './pages/arch-enemy/arch-enemy.component';
import { BlindGuardianComponent } from './pages/blind-guardian/blind-guardian.component';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';


const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"bandas", component:BandasComponent},
  {path:"login", component:LoginComponent},
  {path:"angra", component:AngraComponent},
  {path:"arch-enemy", component:ArchEnemyComponent},
  {path:"blind-guardian", component:BlindGuardianComponent},
  {path:"eventos-detail/:id", component:EventosDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EventosDetailComponent]
