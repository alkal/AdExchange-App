import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Mobile ad-exchange App', () => {
  let bidderListPage: AppPage;

  beforeEach(() => {
    bidderListPage = new AppPage();
  });

  

/*** SCENARIO 1 ****/  
  it('should display correct information for each bidder', () => {
    bidderListPage.navigateToRoot();
    expect(bidderListPage.checkBidderList()).toBe(true);
  });

/*** SCENARIO 2 ****/ 
  it('should redirect user to bidder edit page', () => {
    bidderListPage.navigateToRoot();
    expect(bidderListPage.clickBidderLink());
  });

/*** SCENARIO 3 ****/ 
  it('should check edit process', () => {
    bidderListPage.navigateToEdit();
    expect(bidderListPage.editBidderItem()).toBeUndefined;
    expect(bidderListPage.statusCode()).toBe(false);
  });



});
