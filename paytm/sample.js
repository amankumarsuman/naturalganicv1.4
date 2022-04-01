/* More Details: https://developer.paytm.com/docs/checksum/#node */

var PaytmChecksum = require("./PaytmChecksum");

var paytmParams = {};

/* Generate Checksum via Array */

/* initialize an array */
paytmParams["MID"] = "SARITA20325842189428";
paytmParams["ORDERID"] = "YOUR_ORDER_ID_HERE";

/**
 * Generate checksum by parameters we have
 * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
 */
var paytmChecksum = PaytmChecksum.generateSignature(
  paytmParams,
  "CmkB3suypcDsRkA3"
);
paytmChecksum
  .then(function (result) {
    console.log("generateSignature Returns: " + result);
    var verifyChecksum = PaytmChecksum.verifySignature(
      paytmParams,
      "CmkB3suypcDsRkA3",
      result
    );
    console.log("verifySignature Returns: " + verifyChecksum);
  })
  .catch(function (error) {
    console.log(error);
  });

/* Generate Checksum via String */

/* initialize JSON String */
body = '{"mid":"SARITA20325842189428","orderId":"YOUR_ORDER_ID_HERE"}';

/**
 * Generate checksum by parameters we have
 * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
 */
var paytmChecksum = PaytmChecksum.generateSignature(body, "CmkB3suypcDsRkA3");
paytmChecksum
  .then(function (result) {
    console.log("generateSignature Returns: " + result);
    var verifyChecksum = PaytmChecksum.verifySignature(
      body,
      "CmkB3suypcDsRkA3",
      result
    );
    console.log("verifySignature Returns: " + verifyChecksum);
  })
  .catch(function (error) {
    console.log(error);
  });
