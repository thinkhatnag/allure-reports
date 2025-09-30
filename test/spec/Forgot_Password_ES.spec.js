import LoginPage from "../../test/screenObjectModel/login.page.js";
import { verify, verifyAndClick } from "../../helpers/helper.js";
import SpanishLanguage from "../screenObjectModel/spanishLanguage.js";
import allureReporter from "@wdio/allure-reporter";

describe("Forgot Password all scenarios in spanish", () => {
  beforeEach(() => {
    allureReporter.addEpic("NOKI IOS Automation");
    allureReporter.addFeature("Forgot Password all scenarios ");
    allureReporter.addOwner("Mobile Team");
  });
  it("Verify  message entering not rigistered email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail('nag.subbarayudu@gmail.com');
    await verify(SpanishLanguage.emailNotRegisteredError);
    await verifyAndClick(SpanishLanguage.loginLink);
  });
  it("Verify  message entering inccorect email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail("bheema.badri@");
    await verify(SpanishLanguage.invalidEmailError);
    await verifyAndClick(SpanishLanguage.loginLink);
  });

  it("Verify  message not entering  email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail("  ");
    await verify(SpanishLanguage.forgotPasswordEmailError);
    await verifyAndClick(SpanishLanguage.loginLink);
  });
  it.skip("Verify success message for entering correct email in forgot password screen", async () => {
    await LoginPage.restartApp();
    await verifyAndClick(SpanishLanguage.forgotPassword);
    await SpanishLanguage.enterForgotPasswordEmail(process.env.Email);
    await verify(SpanishLanguage.successMessageForResetLink);
    await verifyAndClick(SpanishLanguage.continueToLogin);
  });
});
