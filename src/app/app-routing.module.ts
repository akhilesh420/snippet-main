import { FeedComponent } from './feed/feed.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './create/create.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialPageComponent } from './static pages/tutorial-page/tutorial-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full'},
  { path: 'explore', component: FeedComponent},
  { path: 'collection/:id', component: FeedComponent, canActivate: [AuthGuard]},
  { path: 'create/:step', component: CreateComponent, canActivate: [AuthGuard]},
  { path: 'create', redirectTo: '/create/content', pathMatch: 'full', canActivate: [AuthGuard]},
  { path: 'profile/:id', component: FeedComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'post/:id', component: FeedComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'auth/:id', component: AuthComponent},
  { path: 'tutorial', component: TutorialPageComponent}
];

// , {scrollPositionRestoration: 'enabled'}
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
