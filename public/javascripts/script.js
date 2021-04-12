// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
//addFood(steak[i], '#steak');
//console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
        addFood(steak[2], '#steak', () => {
            addFood(steak[3], '#steak', () => {
                addFood(steak[4], '#steak', () => {
                    addFood(steak[5], '#steak', () => {
                        addFood(steak[6], '#steak', () => {
                            addFood(steak[7], '#steak', () => {
                                return printSteak()
                            })
                        })
                    })
                })
            })
        })
    })

});

function printSteak() {
    let img = document.querySelector('#table').innerHTML = `
      <img src="/public/images/steak.jpg" alt="steak img">
      `

    return img;
}




// Iteration 2 using `.then()`

addFood(mashPotatoes[0], '#mashPotatoes')
    .then(() => {
        return addFood(mashPotatoes[1], '#mashPotatoes')
    })
    .then(() => {
        return addFood(mashPotatoes[2], '#mashPotatoes')
    })
    .then(() => {
        return addFood(mashPotatoes[3], '#mashPotatoes')
    })
    .then(() => {
        return addFood(mashPotatoes[4], '#mashPotatoes')
    })
    .then(() => {
        return printMashPotatoes()
    })

function printMashPotatoes() {
    let img = document.querySelector('#table')
    img.innerHTML = `
      <img src="/public/images/mashPotatoes.jpg" alt="steak img">
      `

    return img;
}

/*


// Iteration 3 using async and await

async function makeFood(step) {
    // ... your code here

}
makeFood(eachStep);
*/