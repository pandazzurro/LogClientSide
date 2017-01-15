import { LogClientSidePage } from './app.po';

describe('log-client-side App', function() {
  let page: LogClientSidePage;

  beforeEach(() => {
    page = new LogClientSidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
