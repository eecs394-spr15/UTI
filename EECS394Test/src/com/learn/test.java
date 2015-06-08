package com.learn;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.*;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import io.appium.java_client.ios.*;
public class test {
	WebDriver wd;
	
	@Before
	public void beforeTest() throws MalformedURLException{
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("deviceName","iPhone 6");
		capabilities.setCapability("platformName","iOS");
		capabilities.setCapability("platformVersion","8.1");
		capabilities.setCapability(CapabilityType.BROWSER_NAME, "safari");
		wd = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"),capabilities);
	}
	
	  @Test
	  public void testSearchPage(){
		  wd.get("https://www.google.com/");
	  }
	  
	  @After
	  public void afterTest() {
	  }
}

