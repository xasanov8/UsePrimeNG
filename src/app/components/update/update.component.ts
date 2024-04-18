import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../serices/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  myId!: number;

  user: CreateUser = {
    name: "",
    age: 0
  };

  setValue: CreateUser = {
    name: "",
    age: 0
  };

  users: CreateUser[] = [
    this.user
  ]

  constructor(private http : CrudService){
  }

  ngOnInit(): void {

    this.getById();
    console.log('user keldi')
    console.log(this.user)

  }



  getById(){

    this.http.getById(this.myId).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  setUser(){
    this.http.update(this.myId, this.user).subscribe({
      next: (data) => {
        this.user = data;
        this.user = this.setValue
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
