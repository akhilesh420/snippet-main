import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  exploreSymbol: string = "assets/icons/exploreSymbol@2x.png";
  collectionSymbol: string = "assets/icons/sticker-icon.png";
  createSymbol: string = "assets/icons/createSymbol@2x.png";
  dropdownSymbol: string = "assets/icons/dropdownSymbol@2x.png";

  displayPicture$: BehaviorSubject<any>;
  uid: string;
  isAuthenticated: boolean;
  notifier$ = new Subject();

  imageProp = {'height':'100%', 'width':'auto'};

  placeholderImg = 'assets/default image/blank_image@2x.png';

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.authService.user.pipe(takeUntil(this.notifier$)).subscribe(response => {
      this.isAuthenticated = !!response;
      if (this.isAuthenticated) {
        this.uid = response.id;
        this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
      }
    }, errorMessage => {
      console.log(errorMessage);
    });
  }

    onLoad(event: any) {
    let width = event.target.width;
    let height= event.target.height;
    if (width/height < 1) {
      this.imageProp.width = '100%';
      this.imageProp.height = 'auto';
    } else {
      this.imageProp.width = 'auto';
      this.imageProp.height = '100%';
    }
  }

  navigate(event: string) {
    if (event === 'explore') {
      this.router.navigate(['/explore']);
    } else {
      if (this.isAuthenticated) {
        if (event === 'profile') {
          this.router.navigate(['/profile' + this.uid]);
        } 
        if (event === 'collection') {
          this.router.navigate(['/collection' + this.uid]);
        } 
        if (event === 'create') {
          this.router.navigate(['/create']);
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
