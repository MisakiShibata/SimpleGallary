import { SimpleGallaryPage } from './app.po';

describe('simple-gallary App', function() {
  let page: SimpleGallaryPage;

  beforeEach(() => {
    page = new SimpleGallaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
