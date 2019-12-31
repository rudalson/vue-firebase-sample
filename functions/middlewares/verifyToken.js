const admin = require('firebase-admin')

module.exports = (req, res, next) => {
  console.log(req.headers)
  console.log('here')
  admin.auth().verifyIdToken(req.headers.authorization)
    .then(function (decodedToken) {
      req.claims = decodedToken
      next()
    }).catch(function (e) {
      console.log(e.message)
      res.status(401).send()
    })
  // next()
}
