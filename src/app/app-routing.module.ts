import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main/main.component';
import {MainResolveService} from './services/resolve/main-resolve.service';

const routes: Routes = [
  {path: '', component: MainComponent, resolve: {data: MainResolveService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
