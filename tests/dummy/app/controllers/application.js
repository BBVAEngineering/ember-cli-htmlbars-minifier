import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get dataForRemoveSpacesAroundTag() {
    return [{ url: 'foo', test: true, title: 'bar' }, { url: 'bar' }];
  }
}
