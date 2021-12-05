var http = require('http');

var url = require('url');

helpNeeded = false;
var main = function(req, res)
{   
   
   var q = url.parse(req.url, true).query;
   if(q.pathname === '/'){  
      res.write(toString(helpNeeded));
      res.end();
   }
   if(q.pathname === '/help'){
      helpNeeded = true;
   }
   if(q.pathname === '/clear'){
      helpNeeded = false;
   }
}
http.createServer(main).listen(process.env.PORT || 4200);
