import { FeedComponent } from './feed/feed.component';
import { AuthComponent } from './auth/auth.component';
import { CreateComponent } from './create/create.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TutorialPageComponent } from './static pages/tutorial-page/tutorial-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { map } from 'rxjs/operators';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const onlyAllowSelf = (next) => map((user: any) => !!user && next.params.id === user.uid);

const appRoutes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full'},
  { path: 'explore', component: FeedComponent},
  { path: 'collection/:id', component: FeedComponent, ...canActivate(onlyAllowSelf)},
  { path: 'create/:step', component: CreateComponent, ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'create', redirectTo: '/create/content', pathMatch: 'full', ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'profile/:id', component: FeedComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'post/:id', component: FeedComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'auth/:id', component: AuthComponent},
  { path: 'tutorial', component: TutorialPageComponent},
  {path: '404', redirectTo: '/explore'},
  {path: '**', redirectTo: '/explore'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    // Enable the Angular 6+ router features for scrolling and anchors.
		scrollPositionRestoration: "enabled",
		anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
