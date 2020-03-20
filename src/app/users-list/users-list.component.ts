import { Component, OnInit } from '@angular/core';
import { UsersService} from '../../app/core/services/users.service'
import { User } from '../core/models/user.model';

@Component({
  selector: 'ng-e-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users:User[];

  constructor(
    public usersService: UsersService,

  ) { }

  ngOnInit() {

    this.usersService.getUsers().subscribe(
      res => {
        this.users = [
          ...res[0]['data'],
          ...res[1]['data']
        ]
      },
      err =>{
        console.log(err)
      }
    )


  }

}
