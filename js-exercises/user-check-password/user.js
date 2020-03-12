function User(username, password) {
  this.username = username;
  this.password = password;
}

User.prototype.checkPassword = function(password) {
  return this.password === password;
};

export {
  User,
};
