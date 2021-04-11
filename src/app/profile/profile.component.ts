import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  name: string = 'Ollie Coldwell'
  interests = ['Coding', 'Reading', 'Gardening'];
  isAdmin: boolean = true;
  buttonClicks: number = 0;
  buttonName: string = "Edit"
  imageUrl: string =
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eBhbg11fD2BpEPnhADUrxgHaOG%26pid%3DApi&f=1';

  editClick() {
    if(this.buttonClicks < 1) {
      this.buttonClicks++;
      this.buttonName = "Close"; 
    } else {
      this.buttonClicks--;
      this.buttonName = "Edit";
    }
  }
  
  handleReset() {
    this.name = 'Ollie Coldwell';
  }
  constructor(private userService: UserService) {
    this.name = userService.user.displayName;
  }

  handleLogin() {
    this.userService.login();
  }

  ngOnInit(): void {}
}
