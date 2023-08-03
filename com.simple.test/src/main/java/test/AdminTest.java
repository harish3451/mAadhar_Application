package test;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeSuite;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.decorators.WebDriverDecorator;
import org.testng.annotations.AfterSuite;

public class AdminTest {
	
	WebDriver driver;
	
  @Test(priority = 1)
  public void login() throws InterruptedException {
	  WebElement adminid = driver.findElement(By.xpath("/html/body/app-root/app-admin-log-in/div/div/div[2]/form/div[1]/input"));
	  adminid.sendKeys("admin@gmail.com");
	  
	  WebElement pswd = driver.findElement(By.xpath("/html/body/app-root/app-admin-log-in/div/div/div[2]/form/div[2]/input"));
	  pswd.sendKeys("Admin@123456");
	  
	  WebElement login = driver.findElement(By.xpath("/html/body/app-root/app-admin-log-in/div/div/div[2]/form/input"));
	  login.click();
	  Thread.sleep(5000);
	  
  }
  
  @Test(priority = 2)
  public void logout() {
	  WebElement logout = driver.findElement(By.xpath("/html/body/app-root/app-admin-log-in/app-admin-home/div/div[1]/div[3]/button"));
	   	logout.click();
  }
  @BeforeSuite
  public void beforeSuite() {
	  driver = new ChromeDriver();
	  driver.get("http://localhost:4200/admin");
  }

  @AfterSuite
  public void afterSuite() {
	  driver.quit();
  }

}
