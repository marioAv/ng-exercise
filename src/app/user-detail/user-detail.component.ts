import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { User } from '../core/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  currentUser:User;
  userId;
  userNotFound:boolean = false;

  constructor(
    public usersService: UsersService,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.activeRoute.paramMap.subscribe(
      params =>  {
        this.userId = params.get('userId')
      }
    )

    this.usersService.getSingleUser(this.userId).subscribe(
      res => {
        this.currentUser = res['data']
      },
      err =>{
        this.userNotFound = true;
        console.log(err);
      }
    )
  }

}
