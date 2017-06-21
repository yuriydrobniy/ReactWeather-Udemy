/*
function getTempPromise (location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise('Odessa').then(function(temp) {
  console.log('promise succes', temp);
}, function(err) {
  console.log('promise error', err);
})
*/

function somePromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve( a + b );
    } else {
      reject('City not found');
    }
  });
}

somePromise(5, "9").then(function(res) {
  console.log('promise succes', res);
}, function(err) {
  console.log('promise error', err);
})