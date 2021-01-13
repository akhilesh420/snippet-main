import { FeedComponent } from './feed/feed.component';
import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './create/create.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TutorialPageComponent } from './static pages/tutorial-page/tutorial-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

const appRoutes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full'},
  { path: 'explore', component: FeedComponent},
  { path: 'collection/:id', component: FeedComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'create/:step', component: CreateComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'create', redirectTo: '/create/content', pathMatch: 'full', canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  { path: 'profile/:id', component: FeedComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'post/:id', component: FeedComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'auth/:id', component: AuthComponent},
  { path: 'tutorial', component: TutorialPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
