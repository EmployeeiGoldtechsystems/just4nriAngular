import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import{FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  enquirtForm=FormGroup;
  ngOnInit(): void {

    this.enquiryForm=new FormGroup({
      'f_name' : new FormControl('',Validators.required),
     // 'l_name' : new FormControl('',Validators.required),
      'mail':new FormControl('',[Validators.required,Validators.email]),
      //'checked':new FormControl(false),
      'phone':new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10),Validators.minLength(10)]),
      'whatsapp':new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)])
    });
  }

  enquiryForm=this.fb.group({
    f_name:[''],
     mail:[''],
    phone:[''],
    whatsapp:[''],
    need:['']
  })
  AcceptNumbersOnly(event: { which: any; keyCode: any; }):boolean
  {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31 && (charCode<48 || charCode>57))
    {
      return false;
    }
    return true;
  }

  AcceptCharacterOnly(event: { which: any; keyCode: any; }):boolean
  {
    const charCode=(event.which)?event.which:event.keyCode;
    if(charCode>31 && (charCode<48 || charCode>57))
    {
      return true;
    }
    return false;
  }

 
  // DISPLAYING THE COLLECTED DATA 
  collectData()
  {
  
    //alert(this.enquiryForm.get('phone')?.touched);
    console.warn(this.enquiryForm.value);
  }
 





}
