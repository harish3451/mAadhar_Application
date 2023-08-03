package test;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeSuite;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;

public class citizenTest {
	
	WebDriver driver ;
	
//  @Test(priority = 1)
  public void RegistrationTest() throws InterruptedException {
	  Thread.sleep(3000);
	  WebElement register = driver.findElement(By.xpath("/html/body/app-root/log-in/div/div/div[2]/form/a"));
	  	  register.click();
	  	 Thread.sleep(3000);
	  	  WebElement name = driver.findElement(By.xpath("/html/body/app-root/app-register/div/div/form/div[1]/input"));
	  	  name.sendKeys("Harish Kumar");
	  	  
	  	  WebElement gender = driver.findElement(By.xpath("/html/body/app-root/app-register/div/div/form/div[2]/input[1]"));
	  	  gender.click();
	  	  
	  	  WebElement mobile = driver.findElement(By.xpath("/html/body/app-root/app-register/div/div/form/div[4]/input"));
	  	  mobile.sendKeys("9876543210");
	  	  
	  	  WebElement mail = driver.findElement(By.xpath("/html/body/app-root/app-register/div/div/form/div[5]/input"));
	  	  mail.sendKeys("harish@gmail.com");
	  	  
	  	  WebElement address = driver.findElement(By.xpath("/html/body/app-root/app-register/div/div/form/div[6]/textarea"));
	  	  address.sendKeys("Vijayawada");
	  	  
	  	  WebElement submit = driver.findElement(By.xpath("/html/body/app-root/app-register/div/div/form/input"));
	  	  submit.click();
	  	  
	  	  Thread.sleep(3000);
  }
  
  
   @Test(priority = 2)
   public void loginTest() throws InterruptedException {
	   Thread.sleep(3000);
	   WebElement userid = driver.findElement(By.cssSelector("#ngForm > div:nth-child(1) > input"));
	   userid.sendKeys("683416");
	   
	   WebElement password = driver.findElement(By.xpath("/html/body/app-root/log-in/div/div/div[2]/form/div[2]/input"));
	   password.sendKeys("9876543211" + Keys.ENTER);
	   
	   WebElement submit = driver.findElement(By.xpath("/html/body/app-root/log-in/div/div/div[2]/form/input"));
	   
	   submit.click();
	   Thread.sleep(3000);
   }
   
   
   @Test(priority = 3)
   public void logout() {
	   WebElement logout = driver.findElement(By.xpath("/html/body/app-root/log-in/app-home-page/div/div[1]/div[3]/button"));
	   	logout.click();
   }
  @BeforeClass
  public void beforeSuite() {	
	  driver = new ChromeDriver();
	  driver.get("http://localhost:4200/");
  }

  @AfterClass
  public void afterSuite() {
	  driver.quit();
  }

}
