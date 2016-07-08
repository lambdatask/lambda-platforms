const unirest = require('unirest');

module.exports = (context) => {
  const Request = unirest.get(context.url);
  Request.end((response) => {
    console.log(response.body)
  })
}
