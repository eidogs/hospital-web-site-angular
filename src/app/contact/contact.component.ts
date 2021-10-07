import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    number: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
    this.contactService.postMessage(this.contactForm.value)
    .subscribe(data => {
      alert("Message envoyé avec succès");
    });
  }

}
