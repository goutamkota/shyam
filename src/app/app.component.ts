import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value: any;
  value1: any;
  value2: any;
  value3: any;
  selectedValue: string = 'a';
  types: string[] | undefined = ['a', 'b', 'c'];
  form1!: FormGroup<any>;
  form2!: FormGroup<any>;
  form3!: FormGroup<any>;
  constructor() {
    this.form1 = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      amount1: new FormControl('', [Validators.required]),
      id1: new FormControl('', [Validators.required]),
    });
    this.form2 = new FormGroup({
      amount: new FormControl('', [Validators.required]),
    });
    this.form3 = new FormGroup({
      amountPerUnit: new FormControl('', [Validators.required]),
    });
  }
  onchange(e: any) {
    switch (e) {
      case 'a':
        this.form2.reset();
        this.form3.reset();
        break;
      case 'b':
        this.form1.reset();
        this.form3.reset();
        break;
      case 'c':
        this.form1.reset();
        this.form2.reset();
        break;
    }
  }

  submitdata(key: string) {
    switch (key) {
      case 'a':
        let data: any = {
          type: this.selectedValue,
          chargeData: [
            {
              amount: this.form1.value.amount,
              amountPerUnit: "",
              Id: this.form1.value.id
            },
            {
              amount: this.form1.value.amount1,
              amountPerUnit: "",
              Id: this.form1.value.id1
            }
          ],
        }
        console.log(data);
        break;
      case 'b':
        let data1: any = {
          type: this.selectedValue,
          chargeData: [
            {
              amount: this.form2.value.amount,
              amountPerUnit: "",
              Id: ""
            }
          ],
        }
        console.log(data1);
        break;
      case 'c':
        let data2: any = {
          type: this.selectedValue,
          chargeData: [
            {
              amount: "",
              amountPerUnit: this.form3.value.amountPerUnit,
              Id: ""
            }
          ],
        }
        console.log(data2);
        break;
    }
  }
  generateRandomCode(): any {
    var code = '';
    var digits = '0123456789';

    for (var i = 0; i < 16; i++) {
      var randomIndex = Math.floor(Math.random() * digits.length);
      code += digits[randomIndex];
    }

    return code;
  }
}
