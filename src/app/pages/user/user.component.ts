import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, HttpClient]
})
export class UserComponent implements OnInit {
  public users: any;

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.query().subscribe(
      (users:any) => {
        debugger;
        this.users = users.data;
      }
    );
  };
}
