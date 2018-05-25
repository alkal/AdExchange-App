import { browser, by, element, $$ } from 'protractor';

export class AppPage {
  navigateToRoot() {
    return browser.get('/biddersList');
  }

  navigateToEdit() {
    return browser.get('/view-bidder/e7fe51ce-4f63-7687-6353-ff0961c2eb0d');
  }

/*** SCENARIO 1 ****/  
  checkBidderList(){
    return $$('.panel').then(function(items) {  //shortcut $$() notation instead of element.all(by.css()):
      for(let i=0;i<items.length;i++)
      {
        let bidderNameItem=$$('.panel').get(i).all(by.css('.bidderName')).isPresent(); 
        let bidderEndpointItem=$$('.panel').get(i).all(by.css('.bidderEndpoint')).isPresent();
        let bidderLinkItem=$$('.panel').get(i).all(by.css('.bidderLink')).isPresent();
        
        if(bidderNameItem)
          return bidderNameItem;
        else if (bidderEndpointItem)
          return bidderEndpointItem;
        else if(bidderLinkItem)
          return bidderLinkItem;
        else 
          return true;
      }
    });
  }

/*** SCENARIO 2 ****/
  clickBidderLink(){
    element(by.css('.editLink')).click().then(function(){
      return browser.driver.wait(function() {
        return browser.driver.getCurrentUrl().then(function(url) {
          return /view-bidder/.test(url);
        });
      }, 10000);
    });
  }

/*** SCENARIO 3 ****/
  editBidderItem(){
    let bidderNameField = element(by.id('name'));
    let saveBtn = element(by.css('.saveBtn'));
    bidderNameField.sendKeys('testApi');
    saveBtn.click().then(()=> {
      return browser.driver.wait(function() {
        return browser.driver.getCurrentUrl().then(function(url) {
          return bidderNameField.getAttribute('value');
        });
      },500000);
    });
  }

  statusCode(){
    let errorMsg = element(by.css('.error')).isPresent();
    let saveBtn = element(by.css('.saveBtn'));
    
    saveBtn.click();
    if(errorMsg)
      return errorMsg;
  }




}
