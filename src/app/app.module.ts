import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirePerformanceModule , PerformanceMonitoringService  } from "@angular/fire/performance";
import { AngularFireAnalyticsModule, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './feed/post/post.component';
import { PostEditComponent } from './feed/post/post-edit/post-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { CommentsComponent } from './feed/post/comments/comments.component';
import { CommentComponent } from './feed/post/comments/comment/comment.component';
import { CommentListComponent } from './feed/post/comments/comment-list/comment-list.component';
import { HolderComponent } from './feed/post/holder/holder.component';
import { StickerComponent } from './sticker/sticker.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { TitleCaseDirective } from './shared/directives/title-case.directive';
import { TitleCasePipe } from '@angular/common';
import { WithLoadingPipe } from './shared/with-loading.pipe';
import { DateSortPipe } from './shared/date-sort.pipe';
import { TutorialPageComponent } from './static pages/tutorial-page/tutorial-page.component';
import { ScrollableDirective } from './shared/directives/scrollable.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { ShortenPipe } from './shared/shorten.pipe';
import { SnapscrollDirective } from './shared/directives/snapscroll.directive';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CollectionTabComponent } from './collection-tab/collection-tab.component';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    FeedbackComponent,
    FeedComponent,
    PostComponent,
    PostEditComponent,
    ProfileEditComponent,
    CommentsComponent,
    CommentComponent,
    CommentListComponent,
    HolderComponent,
    StickerComponent,
    ProfileDisplayComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    TitleCaseDirective,
    WithLoadingPipe,
    DateSortPipe,
    TutorialPageComponent,
    ScrollableDirective,
    NavbarComponent,
    ShortenPipe,
    PopUpComponent,
    SnapscrollDirective,
    CollectionTabComponent,
    ProfileTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFirePerformanceModule, // performance
    AngularFireAnalyticsModule, // analytics
    ClickOutsideModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    TitleCasePipe,
    Title,
    PerformanceMonitoringService,
    ScreenTrackingService,
    UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
