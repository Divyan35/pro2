import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http,Headers} from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClient,HttpHeaders} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //apiKey: string = 'AIzaSyDXQLQo-aNcWqSo54yI8excwRRV14cU5gU';
  //apiKey: string = 'AIzaSyAk2Wh58M5xp5cfv5809nsWrwvBHqg69hE';
  apiKey:string = 'AIzaSyCy26WP71z0OV0paMJed8o5liINrUp43Rc';
  setUrl : string;

  constructor(private http:HttpClient) { }

  getVideosForChanel(searchresult): Observable<Object> {
    //let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    //url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDXQLQo-aNcWqSo54yI8excwRRV14cU5gU&q=tiger&part=snippet&type=video,id&maxResults=15';
    let url = 'https://www.googleapis.com/youtube/v3/search?key='+ this.apiKey + '&q='+ searchresult +'&part=snippet&type=video,id&maxResults=15';
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
      this.setUrl=url;
  }
}
