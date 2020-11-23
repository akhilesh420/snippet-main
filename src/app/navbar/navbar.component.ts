import { AfterViewInit, Component, OnDestroy, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { MiscellaneousService } from '../shared/miscellaneous.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  displayPicture$: BehaviorSubject<any>;
  uid: string;
  isAuthenticated: boolean;
  notifier$ = new Subject();
  currentRoute: string = '';

  dropUp: boolean;

  loadingBar$: Subject<boolean>;

  @ViewChild('navbar') navbar: ElementRef;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private router: Router,
              private miscellaneousService: MiscellaneousService) { }

  ngOnInit(): void {
    this.dropUp = false;

    this.loadingBar$ = this.miscellaneousService.getLoading();

    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.uid = response.id;
        this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
      }
    }, errorMessage => {
      console.log(errorMessage);
    });

    this.router.events.pipe(takeUntil(this.notifier$)).subscribe(val => {
      this.currentRoute = this.router.url;
    });
  }

  navigate(event: string) {
    if (event === 'explore') {
      this.router.navigate(['/explore']);
    } else if (event === 'tutorial'){
      this.router.navigate(['/tutorial']);
    } else if (event === 'feedback'){
      this.router.navigate(['/feedback']);
    } else if (event === 'login'){
      this.router.navigate(['/auth']);
    } else {
      if (this.isAuthenticated) {
        if (event === 'profile') {
          this.router.navigate(['/profile/' + this.uid]);
        }
        if (event === 'collection') {
          this.router.navigate(['/collection/' + this.uid]);
        }
        if (event === 'create') {
          this.router.navigate(['/create/content']);
        }
        if (event === 'logout') {
          this.authService.logout();
        }
      } else {
        this.router.navigate(['/auth']);
      }
    }
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }
}
