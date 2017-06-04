import { DoopsPage } from './app.po';

describe('doops App', () => {
  let page: DoopsPage;

  beforeEach(() => {
    page = new DoopsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
