
// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10').then(
//        (response) => console.log(response)
//     );
//  }, []);

// // 
//  const dns = require('node:dns');

//  dns.resolve4('archive.org', (err, addresses) => {
//    if (err) throw err;
 
//    console.log(`addresses: ${JSON.stringify(addresses)}`);
 
//    addresses.forEach((a) => {
//      dns.reverse(a, (err, hostnames) => {
//        if (err) {
//          throw err;
//        }
//        console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//      });
//    });
//  }); 
  
 
 //In this method we are using jason to capture the and noting the user like the userIPAdrres and userLastLoggedIn and IP adress this type of stuffs are their and we have to mange the json using array
 const user = {
    UniqueUserID:123456789,
    UserName:"Anshuman Shukla",
    UserEmailadd:"anshumanshukla.12@gmail.com",
    UserIpAddress:"192.168.10.0",
    UserLasLoggedIn:"YYYY-MM-Date",
    
 }
console.log(user.UserIpAddress)
console.log(user.UserLasLoggedIn)
console.log(user.UserName)
console.log(user.UserLasLoggedIn)


const variable = {
    name:"Anshuman Shukla",
    age:18,
    fullname:"Anshuman shukla"
}
console.log(variable)

