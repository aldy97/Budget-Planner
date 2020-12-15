const proxy = require('http-proxy-middleware');

module.exports = function (app: any) {
  app.use(
    proxy(['/api', , '/otherApi'], {
      target: 'https://budget-planner-server.herokuapp.com/',
    })
  );
};
