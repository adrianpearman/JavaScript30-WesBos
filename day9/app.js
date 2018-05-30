const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

const p = document.querySelector('p')

    // Regular
    console.log('hello')

    // Interpolated
    console.log('hello, i"m a string', 'khdkjdssjkb')

    // Styled
    console.log('%c im some text', 'font-size: 50px; background: #BADA55; text-shadow: 10px 10px 0 green')
    // warning!
    console.warn('OH NOOOO')

    // Error :|
    console.error('OH NOOOO')
    
    // Info
    console.info('OH NOOOO')
    
    // Testing
    console.assert(1 === 2, 'Not correct')

    // clearing - clears all of the console logs from an application
    console.clear()

    // Viewing DOM Elements
    console.log(p) // prints the element(s)
    console.dir(p) // prints all the attributes of the element

    // Grouping together
    dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`)
      console.log(`this is ${dog.name}`)
      console.log(`this is ${dog.name}. He's ${dog.age} years old`)
      console.log(`this is ${dog.name} He's ${dog.age * 7} years old in dog years`);
      console.groupEnd(`${dog.name}`)
    })
    // console.log
    // counting

    // timing
    console.time('fetching data')
    fetch('https://api.github.com/users/adrianpearman')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
      })

    //table
    console.table(dogs)
