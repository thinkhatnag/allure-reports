import LoginPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/login.page.js';
import HomePage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/home.page.js';
import { verify, verifyAndClick } from '/Users/nagasubarayudu/Desktop/IOS/helpers/helper.js';
import SettingsPage from '/Users/nagasubarayudu/Desktop/IOS/test/screenObjectModel/setting.page.js';
import adapterFactory from '@wdio/mocha-framework';
import allureReporter from "@wdio/allure-reporter";
import SpanishLanguage from '../screenObjectModel/spanishLanguage';

describe('Setting screen elments and functinalily verification -Spanish',() => {
    beforeEach(() => {
        allureReporter.addEpic("NOKI IOS Automation");
        allureReporter.addFeature("Settings screen -Es");
        allureReporter.addOwner('Mobile Team');
      });
    it.skip('Verify Settings screen Profille Edit ', async() => {
        await SpanishLanguage.profileSettingScreen()
    });
    it('Verify Settings screen support verification ', async() => {
        await LoginPage.restartApp()
        await SpanishLanguage.support_VerifiCation()

    });
    
    it('Verify Settings screen launguage and general settings', async() => {
        await LoginPage.restartApp()
        await SpanishLanguage.launguageAndGeneralSettings()
        await LoginPage.restartApp()
    });
    

})