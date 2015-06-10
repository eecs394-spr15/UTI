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

public class JiweiTest {
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
		  List<WebElement> username = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIATextField[1]"));
		  List<WebElement> password = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIASecureTextField[1]"));
		  List<WebElement> SignIn = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[1]/UIAWebView[1]/UIAButton[1]"));
		
		  username.get(0).sendKeys("JiweiXia");
		  password.get(0).sendKeys("xjw");
		  SignIn.get(0).click();
		  wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		  List<WebElement> message = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIAScrollView[1]/UIAStaticText[1]"));
		  		Assert.assertEquals(message.get(0).getText(), "successfully logged in");
		  wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		  List<WebElement> messageButton = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIACollectionView[1]/UIACollectionCell[1]/UIAButton[1]"));
		  messageButton.get(0).click();
	  }
	  @Test(groups = "b",dependsOnGroups = "a")
	  public void testProfile(){
		  List<WebElement> viewUTIHistory = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton[3]"));
		  viewUTIHistory.get(0).click();
		  
		  List<WebElement> Sulfa = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIASwitch[1]"));
		  List<WebElement> Peni = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIASwitch[2]"));
		  List<WebElement> Nitro = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIASwitch[3]"));
		  List<WebElement> Fluoro = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIASwitch[4]"));
		  
		  Sulfa.get(0).click();		  
		  Peni.get(0).click();
		  Nitro.get(0).click();
		  Fluoro.get(0).click();
		  
		  List<WebElement> History = wd.findElements(By.xpath(" //UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIATextField[8]"));
		  History.get(0).sendKeys("1.I had a chest surgery 3 years ago.");
		  History.get(0).sendKeys(Keys.ENTER);
		  History.get(0).sendKeys("2.I had an eye surgery 1 year ago.");
		  List<WebElement> SaveBTN = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton[2]"));
		  SaveBTN.get(0).click();
		  List<WebElement> AlertOK = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIAScrollView[1]/UIAStaticText[1]"));
		  List<WebElement> AlertOKBTN=wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIACollectionView[1]/UIACollectionCell[1]/UIAButton[1]"));
		  Assert.assertEquals( AlertOK.get(0).getText(), "Profile information saved");
		  AlertOKBTN.get(0).click();

	  }
	  @Test(groups = "c",dependsOnGroups = "b")
	  public void testReportUTI(){
		  WebElement ReportUTI = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton[1]")).get(0);
		  ReportUTI.click();
		  WebElement drop1 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAElement[1]")).get(0);
		  drop1.click();
		  
		    JavascriptExecutor js = (JavascriptExecutor) wd;
		    HashMap<String, Double> tapObject = new HashMap<String, Double>();
		    tapObject.put("x", (double) 118);
		    tapObject.put("y", (double) 620);
		    tapObject.put("touchCount", 1.0);
		    tapObject.put("duration",  1.0);
		    js.executeScript("mobile: tap", tapObject);
		    js.executeScript("mobile: tap", tapObject);
		    
		    WebElement Done = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[2]/UIAToolbar[1]/UIAButton[3]")).get(0);
		    Done.click();

			  WebElement drop2 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAElement[2]")).get(0);
			  drop2.click();
			    js.executeScript("mobile: tap", tapObject);

			    Done.click();
			    
			  WebElement drop3 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAElement[3]")).get(0);
			  drop3.click();
			    js.executeScript("mobile: tap", tapObject);
			    
			    Done.click();
			    
			  WebElement drop4 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAElement[4]")).get(0);
			  drop4.click();
			    js.executeScript("mobile: tap", tapObject);

			    Done.click();
			  
			  WebElement drop5 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAElement[5]")).get(0);
			  drop5.click();
			    js.executeScript("mobile: tap", tapObject);

			    Done.click();
			  
			  WebElement check1 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIASwitch[1]")).get(0);
			  check1.click();
			  
			  WebElement check2 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIASwitch[3]")).get(0);
			  check2.click();
			  WebElement SaveBTN = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton[1]")).get(0);
			  SaveBTN.click();
			  WebElement message = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIAScrollView[1]/UIAStaticText[1]")).get(0);
			  Assert.assertEquals(message.getText(),"Succesfully Submitted! A Nurse Should Get Back to You Shortly");
			  WebElement messageOK = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIACollectionView[1]/UIACollectionCell[1]/UIAButton[1]")).get(0);
			  messageOK.click();
	  }


	  @Test(groups = "d",dependsOnGroups = "c")
	  public void testCases() {
//		  WebElement element = (new WebDriverWait(wd, 30))
//				   .until(ExpectedConditions.elementToBeClickable(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton[2]")));
		  List<WebElement> viewUTIHistory = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton[2]"));
		  while(viewUTIHistory.size()==0){viewUTIHistory = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton[2]"));}
		  viewUTIHistory.get(0).click();
		  List<WebElement> cases = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIAButton"));
		  int length = cases.size();
		  WebElement Case = cases.get(length-1);
		  String message=Case.getText();
		  Assert.assertEquals(message.contains("Pending"),true);
		  Case.click();
		  WebElement Back2 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIANavigationBar[2]/UIAButton[1]")).get(0);
		  Back2.click();
		  WebElement Back1 = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIANavigationBar[2]/UIAButton[1]")).get(0);
		  Back1.click();

	  }
	  
	  @Test(groups = "e",dependsOnGroups = "d")
	  public void testLogOut(){
		  wd.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		  WebElement LogOut = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[1]/UIAScrollView[2]/UIAWebView[1]/UIALink[1]/UIALink[1]/UIAStaticText[1]")).get(0);
		  LogOut.click();
		  WebElement message = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIAScrollView[1]/UIAStaticText[1]")).get(0);
		  Assert.assertEquals(message.getText(),"You are logged out.");
		  WebElement messageBTN = wd.findElements(By.xpath("//UIAApplication[1]/UIAWindow[4]/UIAAlert[1]/UIACollectionView[1]/UIACollectionCell[1]/UIAButton[1]")).get(0);
		  messageBTN.click();
	  }
	  
	  @AfterTest
	  public void afterTest() {
		  wd.close();
	  }
}
