import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BandasComponent } from './pages/bandas/bandas.component';
import { LoginComponent } from './pages/login/login.component';
import { AngraComponent } from './pages/angra/angra.component';
import { ArchEnemyComponent } from './pages/arch-enemy/arch-enemy.component';
import { BlindGuardianComponent } from './pages/blind-guardian/blind-guardian.component';
import { HttpClientModule } from '@angular/common/http';
import { EventosDetailComponent } from './eventos-detail/eventos-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BandasComponent,
    LoginComponent,
    AngraComponent,
    ArchEnemyComponent,
    BlindGuardianComponent,
    EventosDetailComponent,    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
