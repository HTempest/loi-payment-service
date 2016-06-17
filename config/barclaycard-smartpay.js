/**
 * Created by skaifem on 10/12/2015.
 */
 
var dotenv = require("dotenv");
var env = dotenv.config(); 
var HMAC = JSON.parse(env.HMAC);
var skinCode = JSON.parse(env.SKINCODE);
var currencyCode = JSON.parse(env.CURRENCYCODE);
var merchantAccount = JSON.parse(env.MERCHANTACCOUNT);
var resultURL = JSON.parse(env.RESULTURL);
var applicationServiceReturnUrl = JSON.parse(env.APPLICATIONSERVICERETURNURL);
var smartPayUrl = JSON.parse(env.SMARTPAYURL);
var smartPayHMACTestUrl = JSON.parse(env.SMARTPAYHMACTESTURL);
var startNewApplicationUrl = JSON.parse(env.STARTNEWAPPLICATIONURL);
var mongoURL = JSON.parse(env.MONGOURL);
var cookieDomain = env.PAYMENTMETHODS;
var paymentMethods = JSON.parse(env.PAYMENTMETHODS); 
var db = JSON.parse(env.DATABASE);

var configs = {
"HMAC" : HMAC.HMAC, 
"skinCode": skinCode.skinCode,
"currencyCode": currencyCode.currencyCode,
"merchantAccount": merchantAccount.merchantAccount,
"resultURL":resultURL.resultURL,
"applicationServiceReturnUrl" : applicationServiceReturnUrl.applicationServiceReturnUrl,
"smartPayUrl" : smartPayUrl.smartPayUrl,
"smartPayHMACTestUrl" : smartPayHMACTestUrl.smartPayHMACTestUrl,
"startNewApplicationUrl" : startNewApplicationUrl.startNewApplicationUrl,
"mongoURL": mongoURL.mongoURL,
"cookieDomain": cookieDomain.cookieDomain
};

var database = db.database;

var config = {configs: configs, paymentMethods: paymentMethods, database: database};

//console.log(JSON.stringify(configs));

module.exports = config;