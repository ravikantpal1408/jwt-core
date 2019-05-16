// import { CanvasJS } from 'canvasjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  formModel: any = { };

  constructor(
    // private canvas: CanvasJS
  ) {  }

  ngOnInit() {



  }

  // list = [
  //   `what is blue ?`,
  //   `what is red ?`,
  //   `what is black ?`,
  //   `what is yellow ?`,
  //   `what is violet ?`,
  //   `what is green ?`,
  //   `what is orange ?`,
  //   `what is chrome ?`,
  //   `what is gem ?`
  // ];

  // model = this.fb.group({
  //   qaOne: ['', [Validators.required]],
  //   answerOne: [''],
  //   qaTwo: ['', [Validators.required]],
  //   answerTwo: [''],
  //   qaThree: ['', [Validators.required]],
  //   answerThree: ['']

  // },
  // { validator: this.testCheck2 }
  // );


  // testCheck2(fb: FormGroup)  {
  //   const qaOneVal = fb.get('qaOne');
  //   const qaTwoVal = fb.get('qaTwo');
  //   const qaThreeVal = fb.get('qaThree');
  //   if (qaOneVal.value === qaTwoVal.value || qaOneVal.value === qaThreeVal.value) {
  //     console.log('set Error');
  //     qaOneVal.setErrors({questionTaken: true});
  //     console.log(qaOneVal);
  //   } else {
  //     qaOneVal.setErrors(null);
  //   }
  //   if (qaTwoVal.value === qaOneVal.value || qaTwoVal.value === qaThreeVal.value) {
  //     console.log('set Error');
  //     qaTwoVal.setErrors({questionTaken: true});
  //     console.log(qaTwoVal);
  //   } else {
  //     qaTwoVal.setErrors(null);
  //   }

  //   if (qaThreeVal.value === qaOneVal.value || qaThreeVal.value === qaTwoVal.value) {
  //     console.log('set Error');
  //     qaThreeVal.setErrors({questionTaken: true});
  //     console.log(qaThreeVal);
  //   } else {
  //     qaThreeVal.setErrors(null);
  //   }




}
