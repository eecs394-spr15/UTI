package com.learn;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.testng.Assert;
import org.testng.asserts.*;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.AfterTest;
import org.openqa.selenium.*;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.touch.TouchActions;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileDriver;
import io.appium.java_client.TouchAction;
import io.appium.java_client.TouchShortcuts;
import io.appium.java_client.ios.*;

public class GregTest {
	RemoteWebDriver wd;
	
	@BeforeTest
	public void beforeTest() throws MalformedURLException{
		DesiredCapabilities capabilities = new DesiredCapabilities();
		
		
		capabilities.setCapability("automationName", "Appium");
		  capabilities.setCapability("browserName", "");
		  capabilities.setCapability("autoLaunch",true);
		  capabilities.setCapability("platfromName","iOS");
		  capabilities.setCapability("platfromVersion","8.3");
		  capabilities.setCapability("deviceName","Alfredx's iPhone 5");
		  capabilities.setCapability("showIOSLog",true);
		  
		wd = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@Test(groups = "a")
	  public void testLogin(){
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebElement logInMessage = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[1]")).get(0);
		WebElement logIn = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]")).get(0);
		Assert.assertEquals(logInMessage.getText(), "Please use the mock log in button below to dismiss the Initial View and initialize the rest of your app.");
		logIn.click();
		System.out.println("1.testLogin() Passed");
	  }
	
	@Test (groups = "b",dependsOnGroups = "a")
	public void testCases1Message() throws InterruptedException{
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(4000);
		WebElement AmandaCase1Message = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[3]")).get(0);
		while(!AmandaCase1Message.getText().equals("Amanda hjk")) AmandaCase1Message = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[3]")).get(0);
		Assert.assertEquals(AmandaCase1Message.getText(), "Amanda hjk");

		WebElement AmandaCase1Button = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]")).get(0);
		AmandaCase1Button.click();
		System.out.println("2.testCases1Message() Passed");

	}
	@Test (groups = "c",dependsOnGroups = "b")
	public void testCases1Inside() throws InterruptedException{
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(4000);
		boolean answer1 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[3]")).get(0).equals("Yes");
		boolean answer2 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[5]")).get(0).equals("Yes");
		boolean answer3 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[7]")).get(0).equals("Yes");
		boolean answer4 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[9]")).get(0).equals("Yes");
		boolean answer5 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[11]")).get(0).equals("Yes");
		WebElement button2 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[2]")).get(0);
		if(answer1||answer2||answer3||answer4||answer5) Assert.assertEquals(button2.getText(), "Suggest Clinic Visit");
		System.out.println("3.testCases1Inside() Passed");
	}
	@Test (groups = "d",dependsOnGroups = "c")
	public void checkBoxUnclickable() throws InterruptedException{
		WebElement checkbox1 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIASwitch[1]")).get(0);
		String value1 = checkbox1.getAttribute("value");
		checkbox1.click();
		String value2 = checkbox1.getAttribute("value");
		Assert.assertEquals(value1, value2);
		System.out.println("4.checkBoxUnclickable() Passed");
		  WebElement back = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIANavigationBar[2]/UIAButton[2]")).get(0);
		  back.click();

	}
	
	@Test (groups = "e",dependsOnGroups = "d")
	public void testCases2Message() throws InterruptedException{
		Thread.sleep(5000);
		WebElement AmandaCase2Message = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[5]")).get(0);
		while(!AmandaCase2Message.getText().equals("Jiwei Xia"))
		AmandaCase2Message = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[5]")).get(0);
		
		Assert.assertEquals(AmandaCase2Message.getText(), "Jiwei Xia");
		
		System.out.println("5.testCases2Message() Passed");
	}
	
	@Test (groups = "f",dependsOnGroups = "e")
	public void testCases2Inside() throws InterruptedException{
		//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[2]
		wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		Thread.sleep(4000);
		boolean answer1 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[3]")).get(0).equals("Yes");
		boolean answer2 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[5]")).get(0).equals("Yes");
		boolean answer3 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[7]")).get(0).equals("Yes");
		boolean answer4 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[9]")).get(0).equals("Yes");
		boolean answer5 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAStaticText[11]")).get(0).equals("Yes");
		WebElement button2 =  wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[2]")).get(0);
		if(answer1||answer2||answer3||answer4||answer5) Assert.assertEquals(button2.getText(), "Suggest Clinic Visit");
		System.out.println("6.testCases2Inside() Passed");
	}
	
	  @AfterTest
	  public void afterTest() throws InterruptedException {

		
	  }
}
