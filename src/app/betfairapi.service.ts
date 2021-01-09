import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BetfairapiService {

  headers= new HttpHeaders().set('content-type', 'application/json');

  hastoken:string;

  ApiUrlLogin = "http://35.177.10.95:5256/admin/login";
  ApiGetSport = "http://35.177.10.95:5256/series/get_series_by_sport1?sport_id=";
  ApiCache = "http://35.177.10.95:5256/admin/removeRedisCache";
  ApiHideUnHide = "http://35.177.10.95:5256/admin/changeSeriesStatusById"

  serieslist: any;

  constructor(private http:HttpClient) { }
  //Header


  //Login Api Method

    Login(USerInfo:any){

      this.http.post<any>(this.ApiUrlLogin,USerInfo,{headers:this.headers}).toPromise().then(data=>{
        this.hastoken=data['token'];
        if(this.hastoken){
        localStorage.setItem('token',data['token']);}
      });
      return new Promise((resolve)=>{
        if(this.hastoken){
          resolve(this.hastoken);
        }
      });
    }

    getData(seriesid:any){
      console.log(this.ApiGetSport+seriesid)
      return this.http.post(this.ApiGetSport+seriesid,{heades:this.headers})
    }

    removeCache(){
      return this.http.post(this.ApiCache,{headers:this.headers}).toPromise()
    }

    hideunhide(seriesobj:any){
      return this.http.post(this.ApiHideUnHide,seriesobj,{headers:this.headers})
    }

}

