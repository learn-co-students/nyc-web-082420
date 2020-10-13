console.log("calling you back")

fetch("some_url.com")
.then(response => response.json())
.then(data => console.log(data))
.then(function(data) { console.log(data) })
// .then(console.log)


// implement our own version of map and call it myMap

function myMap(array, callback){
  const newArray = []

  for(const item of array){
    const newItem = callback(item)
    newArray.push(newItem)
  }

  return newArray
}



// heart.addEventListener("click", e => {
//   mimicServiceCall
//   .then(console.log)
//   .catch(alert)
// })