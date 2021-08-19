import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get dataForRemoveSpacesAroundTags() {
    return [{ url: 'foo', test: true, title: 'bar' }, { url: 'bar' }];
  }
}
