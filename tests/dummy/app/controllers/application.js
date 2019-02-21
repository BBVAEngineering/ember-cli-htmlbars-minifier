import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

	dataForRemoveSpacesAroundTags: computed(() => [
		{ url: 'foo', test: true, title: 'bar' },
		{ url: 'bar' }
	])

});
