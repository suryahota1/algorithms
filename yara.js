// // Currying
// const curry = function ( fn ) {
//     return ( ...args ) => {
//         if ( args.length === fn.length ) return fn(...args);
//         return fn.bind(null, ...args);
//     }
// }

// let total = 0;
// function sum ( val ) {
//     if ( val != undefined ) {
//         total += val;
//         return sum;
//     }
//     else return total;
// }

// // function sum ( ...args ) {
// //     return args.reduce(( acc, val ) => {
// //         return acc + val
// //     }, 0);
// // }
// // const curriedSum = curry(sum);
// // console.log(sum(1)(2)(3)(4)());

// function isPallindrome ( str = "qwrertwq") {
//     let i = 0, j = str.length - 1;
//     while ( i < j ) {
//         if ( str[i++] != str[j--] ) return false;
//     }
//     return true;
// }

// console.log(isPallindrome());



// return new Promise(function (resolve, reject) {
//     axios
//       .post('customers', {}, { baseURL: baseURL })
//       .then(function (result) {
//         var dataPromises = result.data.customerIds.map(function (customerId) {
//           return axios.get('customers/' + customerId, { baseURL: baseURL });
//         });

//         Promise.all(dataPromises)
//           .then(function (res) {
//             resolve(
//               res.map(function (result) {
//                 return result.data;
//               })
//             );
//           })
//           .catch(function (err) {
//             reject(err);
//           });
//       })
//       .catch(function (err) {
//         console.log('fails', err.toString());
//         reject(err);
//       });
//   });



import axios from 'axios';

async function findAllCustomerData(baseURL) {
    try {
        const result = axios.post('customers', {}, { baseURL: baseURL });
        const resp = result.data.customerIds.map(async function( customerId ) {
            return await axios.get('customers/' + customerId, { baseURL: baseURL });
        });
        const finalResp = resp.map(function ( respIndv ) {
            return respIndv.data;
        });
        return finalResp;
    } catch ( e ) {
        throw e;
    }
  
}

(async () => {
  try {
    var baseURL = 'https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com';
    const customers = await findAllCustomerData(baseURL);
    if ( customers.length > 0 ) {
        customers.forEach(function (customer) {
            console.log(
              customer.id +
              ': ' +
              customer.first_name +
              ' ' +
              customer.last_name
              );
          });
    } else {
        console.log("No customer data available");
    }
  } catch ( e ) {
    console.error(err);
  }
//   findAllCustomerData(baseURL)
//     .then(function (customers) {
//       customers.forEach(function (customer) {
//         console.log(
//           customer.id +
//           ': ' +
//           customer.first_name +
//           ' ' +
//           customer.last_name
//           );
//       });
//     })
//     .catch(function (err) {
//       console.error(err);
//     });
})();

