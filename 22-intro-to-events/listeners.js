console.log("listening is loaded")

// As a user, when I click on the welcome image I want to see a turquoise border around that image

// 1. get the image
// 2. add a click listener to the image
// 3. on click, modify the style of the image node



const welcomeImage = document.querySelector('#welcome-image')

welcomeImage.addEventListener('click', function(e){
  const image = e.target
  image.style.border = "solid thick turquoise"
})

// function changeBorder(e){
//   const image = e.target
//   image.style.border = "solid thick turquoise"
// }

// welcomeImage.addEventListener('click', changeBorder)

// As a user, when the mouse moves over the welcome image I want to see a picture of a baby sloth, and I want the picture to change back when the mouse moves off the image


welcomeImage.addEventListener('mouseenter', function(e){
  e.target.src = "https://www.nationalgeographic.com/content/dam/news/2016/07/19/slothlove/01_slothlove_leaves.jpg"
})


welcomeImage.addEventListener('mouseleave', function(e){
  e.target.src = "https://media.giphy.com/media/UDjF1zMreMld6/giphy.gif"
})







