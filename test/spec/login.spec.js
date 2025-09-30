import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js';
import { verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
import allureReporter from "@wdio/allure-reporter";

describe('Login screen all senarios in English',() => { 
    beforeEach(() => {
        allureReporter.addEpic("NOKI IOS Automation");
        allureReporter.addFeature("Login all scenarios -En ");
        allureReporter.addOwner('Mobile Team');
      });
    it('Verify error message when password is not provided {TC03}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        // await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.errorMessage);
    });

    it('Verify error message when an incorrect password is entered {TC04}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('123456')
        // await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.shortPassword);
    });

    it('Verify error message( when email is not provided {TC05}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('  ')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailError);
    });

    it('Verify error message when an incorrectly formatted email is entered {TC07}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@')
        await LoginPage.clickLogin();
        await verify(LoginPage.invalidEmailError)
    });

    it('Verify error message when the email is not registered {TC08}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('vqejvcievciye@gmail.com')
        await verify(LoginPage.emailNotRegisteredError)
    });
  
    it('Verify  message when the password is wrong', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail('nag.subbarayudu@thinkhat.ai')
        await LoginPage.enterPassword('Welcome@124')
        // await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.WrongPassword)
    });
       it('Verify  message when the email is multitenent{TC08}', async() => {
        await LoginPage.restartApp()
        await LoginPage.enterEmail(process.env.Email)
        await LoginPage.enterPassword(process.env.Password)
        // await LoginPage.selectMultiTenant();
        await LoginPage.clickLogin();
        await verify(LoginPage.homescreenAnimation)
    });
    
})