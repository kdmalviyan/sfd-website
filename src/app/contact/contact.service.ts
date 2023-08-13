import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public postQuery(query: any) {
    return this.http
    .post("https://740qi1vppa.execute-api.us-east-1.amazonaws.com/default/enquiry", query)
    .toPromise();
  }
}
