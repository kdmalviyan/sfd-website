import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  queryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    query: new FormControl('', [Validators.required]),
  });
  constructor(private contactService: ContactService) { 
  }

  ngOnInit(): void {
  }

  onQuerySubmit() {
    this.contactService.postQuery(this.queryForm.value).then(res => {
      console.log("Message submitted");
      this.queryForm.reset();
    });
  }

}
