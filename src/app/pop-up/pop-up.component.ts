import { Router } from '@angular/router';
import { MiscellaneousService } from './../shared/miscellaneous.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input() message: string = 'Testing  it 123456';
  @Input() primary: string = 'Okay';
  @Input() secondary: string;
  @Input() active: string[]; //[primary colour, secondary colour] if no colour then default
  @Input() route?: string;
  @Input() secondaryRoute?: boolean;

  primaryClass: string;
  secondaryClass: string;

  constructor(private miscellaneousService: MiscellaneousService,
              private router: Router) { }

  ngOnInit(): void {
    this.primaryClass = this.active[0];
    this.secondaryClass = this.active[1];
  }

  onClick(value: boolean) {
    this.miscellaneousService.setPopUpInteraction(value);
    this.miscellaneousService.closePopUp();
    if (!this.secondary) {
      value = true;
    }
    if (value && this.route) {
      this.router.navigate([this.route]);
    }
  }

}
