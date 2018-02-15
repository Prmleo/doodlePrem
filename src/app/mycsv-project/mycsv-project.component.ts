import { Component, OnInit } from '@angular/core';
import{User}from '../Model/data.model';
import{UserService}from '../service/data.service';
@Component({
  selector: 'app-mycsv-project',
  templateUrl: './mycsv-project.component.html',
  styleUrls: ['./mycsv-project.component.css']
})
export class MycsvProjectComponent {
  users:User[];
  mydata;
  constructor(private usrService:UserService) {
    this.users=this.usrService.getItem();
  }
   /*userinsert()
  {
    var MongoClient=require('mongodb').MongoClient;
    var url="mongodb://localhost:27017/leoDoodle";
    console.log("in"+this.mydata);
    MongoClient.connect(url,function(dErr,ref){
      if(dErr)
      console.log("database error");
      else{
          var myDatabase=ref.db("leoDoodle");
      myDatabase.collection("userData").insertOne(this.mydata,function(rErr,rRef){
        if(rErr)
        console.log("Insert record error");
        else
        console.log("data  inserted");
        
          })
        }
        ref.close();
      })
  }*/
}
