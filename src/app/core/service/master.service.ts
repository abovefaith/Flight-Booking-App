import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getAllAirport(){
    this.http.get('https://freeapi.gerasim.in/api/FlightBooking/GetAllAirport');
  }

  saveAirport(airportList: any){
    this.http.post("https://freeapi.gerasim.in/api/FlightBooking/AddUpdateBulkAirports",airportList )
  }

  getAllCity(){
    this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllCity")
  }

  // getAllFlights(){
  //   this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllFlights")
  // }

  getAllFlights(): Observable<any> { // Change the return type to Observable<any>
    return this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllFlights");
  }

}
