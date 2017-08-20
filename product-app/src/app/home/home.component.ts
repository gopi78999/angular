import { Component, OnInit } from '@angular/core';
import { LikeService,Message } from "../shared/like.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    message: Message;

homeLikes: number = 500;

constructor (private likeService:LikeService){
console.log("Home component created..")

}

  

  ngOnInit() {
    //getter
 this.homeLikes = this.likeService.homeLikes;

 //subsricbe
    this.likeService.likeSubject.subscribe((message:Message)=>{
      console.log("at footer",message);
      this.message = message;
    }) 

    setInterval( ()=> {
      //this.homeLikes +=10;
      this.likeService.homeLikes +=10;
      console.log(this.likeService.homeLikes)
    },1000);
  }

}
