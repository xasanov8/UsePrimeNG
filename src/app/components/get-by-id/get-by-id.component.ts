import { Component, OnInit } from '@angular/core';
import { CreateUser } from '../../models/create-user';
import { CrudService } from '../../serices/crud.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent implements OnInit{
  myId!: number;

  user: CreateUser = {
    name: "",
    age: 0
  };

  users: CreateUser[] = [
    this.user
  ]

  constructor(private http : CrudService){
    this.getById();
  }

  ngOnInit(): void {
    this.getById();
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
}
