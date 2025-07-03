// Name this variable {{JS - Environment Type}}
function() {
  // Define an array of production domains.
  // Add all your exact production domains to this array.
  // It's good practice to list both 'www' and non-'www' versions if both are production.
  // Ensure all entries here are in lowercase for consistent matching.
  // Use GTM preview mode on your website to see how GTM returns your domain in the out of the box {{Page Hostname}} variable
  var productionDomains = [
    "www.mydomain.com.au",
    "mydomain.com.au",
    "secure.domain.net"
    // Add any other exact production domains here
  ];

  // Get the current page hostname and convert it to lowercase for case-insensitive comparison.
  var currentHostname = {{Page Hostname}}.toLowerCase();

  // Check if the current hostname is present in the array of production domains.
  // The .some() method iterates and returns true if at least one domain in the productionDomains array matches exactly.
  var isProduction = productionDomains.some(function(domain) {
    return currentHostname === domain.toLowerCase(); // Ensure domain from array is also lowercase
  });

  // Return "prod" if it's a production domain, otherwise return "non-prod".
  if (isProduction) {
    return "prod";
  } else {
    return "non-prod";
  }
}
