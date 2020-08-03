// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// 1- Finding an element on the page and saving a reference to it
//  getElementById, getElementsByTagName, getElementsByClassName
//  querySelector
//  querySelectorAll
const pageHeading = document.querySelector('#logoTitle')
const firstCardTitle = document.querySelector('.card:nth-of-type(1) .card-title')
// console.log(pageHeading)
// console.dir(pageHeading)
console.log(firstCardTitle)

const allLinks = document.querySelectorAll('a')

// const theVeryFirsLink = allLinks[0]
// console.log(allLinks)
// console.log(theVeryFirsLink)

allLinks.forEach(link => {
  // console.log(link.textContent)
})

// 2- Changing an element's text content
//  textContent, innerText
pageHeading.textContent = 'Lambda Dog'
pageHeading.innerText = 'Cool Lambda Dog'
firstCardTitle.textContent = 'Cool Dog'

// 3- Changing any property
//  with dot notation
//  setAttribute, getAttribute

// 4- Changing the style
//  by changing the class names on the element
//  by manipulating inline styles on the element

// 5- Creating new elements and appending them

// 6- Removing an existing element and putting it back

// 7- Making a copy of the card and appending it to the card group
