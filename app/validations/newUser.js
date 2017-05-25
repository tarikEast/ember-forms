import { validatePresence, validateLength } from "ember-changeset-validations/validators";

export default{
    firstName: [
        validatePresence({presence: true, message: '{description} should be present'}),
        validateLength({min: 3})
    ]
}