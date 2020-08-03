// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// 1- Finding an element on the page and saving a reference to it
//  getElementById, getElementsByTagName, getElementsByClassName
//  querySelector
//  querySelectorAll
const firstCard = document.querySelector('.card:nth-of-type(1)')
const pageHeading = document.querySelector('#logoTitle')
const firstCardTitle = firstCard.querySelector('h2')
const firstCardSubtitle = firstCard.querySelector('h3')
const firstCardText = firstCard.querySelector('p')
const firstCardLink1 = firstCard.querySelector('a')
const firstCardLink2 = firstCardLink1.nextElementSibling
const firstCardImg = firstCard.querySelector('img')
// console.log(pageHeading)
// console.dir(pageHeading)
// console.log(firstCardTitle)

const allLinks = document.querySelectorAll('a')
const allLinksAlt = document.getElementsByTagName('a')

// const theVeryFirsLink = allLinks[0]
// console.log(allLinks)
// console.log(theVeryFirsLink)

allLinks.forEach(link => {
  // console.log(link.textContent)
})

Array.from(allLinksAlt).forEach(l => {
  // console.log(l.textContent)
})

// 2- Changing an element's text content
//  textContent, innerText
pageHeading.textContent = 'Lambda Dog'
pageHeading.innerText = 'Cool Lambda Dog'
firstCardTitle.textContent = 'Cool Dog'
firstCardSubtitle.textContent = 'Rulez'
firstCardText.textContent = 'Puggorino tungg puggorino, waggy wags. thicc wow such tempt. Very jealous pupper doing me a frighten puggorino very taste wow, borkdrive. Smol big ol fluffer pupperino fluffer, waggy wags ruff blep.'
firstCardLink2.textContent = 'Dog Ipsum'


// 3- Changing any property
//  with dot notation
//  setAttribute, getAttribute
firstCardLink1.href = 'https://www.pexels.com/search/dog/'
// firstCardLink2.href='https://doggoipsum.com/'
firstCardLink2.setAttribute('href', 'https://doggoipsum.com/')
// firstCardLink1.className = 'foo bar baz'
// firstCardLink1.setAttribute('class', 'foo bar baz')
firstCardImg.src = 'https://yt3.ggpht.com/a-/AAuE7mBvG_YS_Ec8eB9wYeLPmRR-ERiE_nvqTVdqgQ=s900-mo-c-c0xffffffff-rj-k-no'


// 4- Changing the style
//  by changing the class names on the element
const header = document.querySelector('header')
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => {
  header.classList.toggle('sky')
}, 1000)

//  by manipulating inline styles on the element
firstCardText.style.color = 'blue'
firstCardText.style.fontWeight = 'bold'

// 5- Creating new elements and appending them
const blogLink = document.createElement('a') // instantiate the element 
blogLink.textContent = 'Blog'                // tack text content
blogLink.href = '#'                          // tack any other attrs we need
const nav = document.querySelector('nav')    // this is the parent we wish to append the new link to
nav.appendChild(blogLink)                    // appending to the parent (research 'append')

// 6- Removing an existing element and putting it back
blogLink.remove()
nav.append(blogLink)

// 7- Making a copy of the card and appending it to the card group
const secondCard = firstCard.cloneNode()
