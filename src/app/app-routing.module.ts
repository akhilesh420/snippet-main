import { ExplorePageComponent } from './explore-page/explore-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
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
  { path: 'explore', component: ExplorePageComponent},
  { path: 'profile', component: ProfilePageComponent,
    children: [
      { path: 'posts/:id', component: FeedComponent },
      { path: 'collection/:id', component: FeedComponent, ...canActivate(onlyAllowSelf)}
    ]
  },
  { path: 'post/:id', component: FeedComponent},
  { path: 'create/:step', component: CreateComponent, ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'create', redirectTo: '/create/content', pathMatch: 'full', ...canActivate(redirectUnauthorizedToLogin)},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'auth/:id', component: AuthComponent},
  { path: 'tutorial', component: TutorialPageComponent},
  { path: 'p', component: ProfilePageComponent},
  {path: '404', redirectTo: '/explore'},
  {path: '**', redirectTo: '/explore'}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
