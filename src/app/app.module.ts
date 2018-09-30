import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SetupComponent } from './setup/setup.component';
import { GamescreenComponent } from './gamescreen/gamescreen.component';
import { JeopardyService } from './jeopardy.service';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: SetupComponent },
  { path: 'gamescreen', component: GamescreenComponent },
  { path: 'category/:id', component: CategoryDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    GamescreenComponent,
    CategoryDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [JeopardyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
