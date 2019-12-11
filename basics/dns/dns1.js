const dns = require('dns');

dns.resolve4('archive.org', (err, addresses) => {
  if (err) throw err;
  console.log(`地址: ${JSON.stringify(addresses)}`);

  addresses.forEach(item => {
    dns.reverse(item, (err, hostnames) => {
    if (err) {
      throw err
    }

    console.log(`地址 ${item} 逆向解析到域名: ${JSON.stringify(hostnames)}`)
    })
  })
});