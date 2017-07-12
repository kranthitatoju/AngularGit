import { LearnAngularAppPage } from './app.po';

describe('learn-angular-app App', () => {
  let page: LearnAngularAppPage;

  beforeEach(() => {
    page = new LearnAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
