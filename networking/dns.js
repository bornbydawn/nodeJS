const dns = require('dns');

dns.lookup('pluralsight.com', (err, address) => {

    console.log(address);
});

dns.resolve4('pluralsight.com', (err, address) => {

    console.log(address);

});

dns.reverse('54.68.155.197', (err, hostname) => {

    console.log(hostname);
});