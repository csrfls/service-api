module.exports = {
  apps : [{
    script: 'dist/main.js',
  }],
   
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "root",
       "host" : ["143.110.236.21"],
       "ref"  : "origin/main",
       "repo" : "git@github.com:csrfls/service-api.git",
       "path" : "/var/www/service-api",
       "post-deploy": "npm install && npm run build",
    }
  }
};