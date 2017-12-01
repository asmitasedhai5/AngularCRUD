import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import{UserComponent} from './user/user.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'user', component: UserComponent }

    ], {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
