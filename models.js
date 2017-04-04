const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  user: {
    firstName: String,
    lastName: String
  },
  mentor: true,
  phone: {type: String, required: true},
  email: {type: String, required: true},
  background: String,
  preferences: String,
  website: String,
  title: String,
  education: String,
  children: String,
  ethnicity: String,
  dems: String
});


UserSchema.virtual('userName').get(function() {
  return `${this.user.firstName} ${this.user.lastName}`.trim();
});

UserSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    user: this.userName,
    background: this.background,
    title: this.title,
    website: this.website
  };
}

const User = mongoose.model('User', UserSchema);

module.exports = {User};

// update models to fit survey data
// update apirepr to return data that I want on the participant page
