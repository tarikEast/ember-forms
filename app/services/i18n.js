import Ember from 'ember'
import { humanize } from 'ember-form-for/utils/strings';

export default Ember.Service.extend({
  t: function (key) {
    var keyParts = key.split('.');

    return humanize(keyParts[keyParts.length - 1]);
  }
});