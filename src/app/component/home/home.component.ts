import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:any[];
  searchresult:String;
  onevideo:any[];
  firstvideo:any[];

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    const tag = document.createElement('script');
    //tag.src='https://www.youtube.com/iframe-api';
    //document.body.appendChild(tag);
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  search(){
    this.videos = [];
    this.dataservice.getVideosForChanel(this.searchresult).subscribe(list=>{
      for(let element of list["items"]){
        this.videos.push(element);
      }
    });

    this.firstvideo = [];
    for(let i=0;i<1;i++)
    this.firstvideo = this.videos[i];
    console.log(this.firstvideo);
  }

  oncardclick(abc){
    this.onevideo = [];
    console.log('clicked = ' + abc);
    this.onevideo.push(this.videos[abc]);
    console.log(this.onevideo);
  }

}
