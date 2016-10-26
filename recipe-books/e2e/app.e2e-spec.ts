import { RecipeBooksPage } from './app.po';

describe('recipe-books App', function() {
  let page: RecipeBooksPage;

  beforeEach(() => {
    page = new RecipeBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
