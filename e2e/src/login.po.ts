import { browser, by, element } from 'protractor';
import { elementEnd } from '@angular/core/src/render3';

export class LoginPage {
  selectors = {
    'form': 'form',
    'email': 'input[name="email"]',
    'password': 'input[name="password"]',
    'checkbox': 'input[name="rememberMe"]',
    'selectGroup': '[name="group"]',
    'loginButton': 'button'
  };

  navigateToLogin() {
    return browser.get('/login');
  }

  setEmail(emailValue) {

    element(by.css(this.selectors.email)).sendKeys(emailValue);

  }
  setPassword(passwordValue) {

    element(by.css(this.selectors.password)).sendKeys(passwordValue);
  }
  selectGroupOptionLastValue() {

    element(by.css(this.selectors.selectGroup)).click().then(() => element.all(by.css('mat-option')).last().click());

  }

  logIn() {

    element(by.css(this.selectors.form)).submit();

   }



  getTitleText() {
    return element(by.css(this.selectors['title'])).getText();
  }
}
