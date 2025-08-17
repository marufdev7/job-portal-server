/**
 * 1. after successful login: generate a jwt token
 * npm i jsonwebtoken, cookie-parser
 * jwt.sing(payload, secret, {expiresIn: '1d'})
 * 
 * 2. send token (generate in the server side) to the client side local storage --> easier
 * 
 * httpOnly cookies --> better
 * 
 * 3. for sensitive or secure or private or protected apis: send token to the server side
 * 
 * 4. validate the token in the server
 * if valid: provide data
 * if not valid: logout
 * 
 * */