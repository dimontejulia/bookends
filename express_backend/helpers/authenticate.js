const dbHelpersUsers = require("./helpers/dbHelpersUsers")(db);

const authenticate = (email, password) =>{
  /* 
  Param will be the token or session cookie
  Function will perform the check to make 
  sure its let and Rtn True
  */
  
  //Email in DB?
  db.authenticateUser
  //Password Matches?
  
  return true
  //else FALSE
  }

  module.exports = authenticate;