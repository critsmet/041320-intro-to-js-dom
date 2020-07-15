let topStoryText = "Chris's Students Enter JavaScript!"
let topStoryPhoto = "https://avatars.githubusercontent.com/u/36425627"
let trendingStories = ["Another student got a great coding job!", "Flatiron sees more students than ever!", "New Campus in San Francisco!"]

let students = [
  {name: "John", photo: "https://avatars.githubusercontent.com/u/55062999"},
  {name: "Regina", photo: "https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/2688de96-20d0-4a28-94e2-343b25fe94a2/avatar.jpeg"},
  {name: "Matt", photo: "https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/f21ed89d-53bf-4d15-9e12-71d847824907/avatar.jpeg"},
  {name: "Bo", photo: "https://uploads-learn.s3.amazonaws.com/uploads/identities/learn_account/avatar/094e4d7e-0965-417d-b0b3-0c4e3973bf1e/avatar.jpeg"}
]

//1. Grab all the elements where changes will be made

let topStory = document.getElementById('top-story-container')
let trendingStoriesList = document.getElementById('trending-stories-list')
let studentsShowcase = document.getElementById('students-div')

//2. Run the JS to put everything in its right place

topStory.innerHTML = `
    <h2>${topStoryText}</h2>
    <img src=${topStoryPhoto}>
  `
