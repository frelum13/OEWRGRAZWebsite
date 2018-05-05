import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AusbildungComponent } from './ausbildung/ausbildung.component';

const routes: Routes = [
    { path: 'kontakt', component: KontaktComponent},
    { path: 'ausbildung', component: AusbildungComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
