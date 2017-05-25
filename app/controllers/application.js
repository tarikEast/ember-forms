import Ember from 'ember';
import validations from '../validations/newUser';

export default Ember.Controller.extend({
    validations,
    newUser: { address: {}}
});
