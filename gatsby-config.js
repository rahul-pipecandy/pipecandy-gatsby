/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//  const fs = require('fs');
//  const gracefulFs = require('graceful-fs');
//  gracefulFs.gracefulify(fs);
//  global.maxFilesInFlight = 100; // Set this value to some number safeish for your system
//  var origRead = fs.readFileSync;
//  var origWrite = fs.writeFileSync;
 
//  var activeCount = 0;
//  var pending = [];
 
//  var wrapCallback = function(cb){
//      return function(){
//          activeCount--;
//          cb.apply(this,Array.prototype.slice.call(arguments));         
//          if (activeCount < global.maxFilesInFlight && pending.length){
//              console.log("Processing Pending read/write");
//              pending.shift()();
//          }         
//      };
//  };
//  fs.readFileSync = function(){
//      var args = Array.prototype.slice.call(arguments);
//      if (activeCount < global.maxFilesInFlight){
//          if (args[1] instanceof Function){
//              args[1] = wrapCallback(args[1]);
//          } else if (args[2] instanceof Function) {
//              args[2] = wrapCallback(args[2]);
//          }
//          activeCount++;
//          return origRead.apply(fs,args);
//      } else {
//          console.log("Delaying read:",args[0]);
//          pending.push(function(){
//              fs.readFileSync.apply(fs,args);
//          });         
//      }
//      return JSON.stringify({});
//  };
 
//  fs.writeFileSync = function(){
//      var args = Array.prototype.slice.call(arguments);
//      if (activeCount < global.maxFilesInFlight){
//          if (args[1] instanceof Function){
//              args[1] = wrapCallback(args[1]);
//          } else if (args[2] instanceof Function) {
//              args[2] = wrapCallback(args[2]);
//          }
//          activeCount++;
//          origWrite.apply(fs,args);
//      } else {
//          console.log("Delaying write:",args[0]);
//          pending.push(function(){
//              fs.writeFileSync.apply(fs,args);
//          });
//      }
//  };

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',  
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/src/markdowns/`,
    //     // path: `https://github.com/ammarjabakji/gatsby-markdown-blog-starter/tree/master/content/`
    //   },
    // }
  ],
}
