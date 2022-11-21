import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {CookieOptions} from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-cookie-service';


  constructor(private cookiService: CookieService) {
    this.setCookie();
    this.deleteCookie();
    this.deleteAll();
  }

  //Setting Cookie to the browser
  setCookie() {
    this.cookiService.set('technicadil_cookie', 'This is a Cookie');
  }

  //Get Cookie to the browser
  getCookie() {
    this.cookiService.get('technicadil_cookie');
  }

  //Get All Cookie to the browser
  getAllCookie() {
    this.cookiService.getAll();
  }

  //Delete Cookie to the browser
  deleteCookie() {
    this.cookiService.delete('technicadil_cookie');
  }
  //Delete All Cookie to the browser   
  deleteAll() {
    this.cookiService.deleteAll();
  }

  //Check Cookie to the browser
  checkCookie() {
    var IsCookieExist = this.cookiService.check('technicadil_cookie');
    console.log("Cookie Exist",IsCookieExist);
  }

}
