import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(public ordersService: UserService) { }
//   onSubmit() {
//     this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
//     let data = this.ordersService.form.value;
    
//    this.ordersService.createCoffeeOrder(data)
//        .then(res => {
//            /*do something here....
//            maybe clear the form or give a success message*/
//        });
// }

  ngOnInit(): void {
  }

}
