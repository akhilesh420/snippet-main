import { UsersService } from './shared/users.service';
import { AuthService } from './auth/auth.service';
import { WindowStateService } from './shared/window.service';
import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Biography, ProfileDetails } from './shared/profile.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'snippet';
  mobileCheck: boolean;

  constructor(private windowService: WindowStateService,
              private authService: AuthService,
              private userService: UsersService,
              private titleService: Title){
  }

  ngOnInit(){
    this.authService.autoLogin();
    this.titleService.setTitle("Snippet");
    this.windowService.getMobileStatus().subscribe( isMobile =>{
      if(isMobile){
        this.mobileCheck = true;
      }
      else{
        this.mobileCheck = false;
      }
    });
    this.onResize();
    // this.testingFunction1();
    // this.testingFunction(); //testing
  }

  testingFunction() {
    this.userService.getProfileDetails('1').subscribe(response => {
      console.log(response);
    });
  }

  testingFunction1() {
    const profileDetails: ProfileDetails = new ProfileDetails('akhilesh',new Biography('','',''));
    this.userService.addProfileDetails('1', profileDetails);
  }

  onResize(){
    this.windowService.checkWidth();
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    // console.log("Scroll Event:", window.pageYOffset);
  }

}
