import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { CollectionComponent } from './collection/collection.component';
import { ExploreComponent } from './explore/explore.component';
import { FeedbackComponent } from './feedback/feedback.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialPageComponent } from './static pages/tutorial-page/tutorial-page.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/explore', pathMatch: 'full'},
  { path: 'explore', component: ExploreComponent},
  { path: 'collection/:id', component: CollectionComponent, canActivate: [AuthGuard]},
  { path: 'create', component: CreateComponent, canActivate: [AuthGuard]},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'profile/:id/edit', component: ProfileEditComponent, canActivate: [AuthGuard]},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'post/:pid', component: SinglePostComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'auth/:id', component: AuthComponent},
  { path: 'tutorial', component: TutorialPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
