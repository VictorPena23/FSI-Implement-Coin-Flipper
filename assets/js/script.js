// TODO: Declare any global variables we need
let headsRolls = 0
let tailsRolls = 0 

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    //console.log ('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
document.gotElementbyID('flip').addEventListener('click', function() {
    let flip = Math.random()
    console.log(flip)
    if (flip < 0.5) {
        document.getElementById('penny-image').src ='assets/images/penny-heads.jpg';
        document.getElementById('message').textContent ='You Flipped Heads!'
        numHeads += 1
        document.getElementById('heads').textContent = numHeads 
        document.getElementById('heads-percent')
    } else (flip >= 0.5) {
        document.getElementById('penny-image').src ='assets/images/penny-tails.jpg';
        document.getElementById('message').textContent ='You flipped Tails!'
        numTails += 1
        document.getElementById('tails').textContent = numTails 
        document.getElementById('tails-percent')

    }

    let numflips = numHeads + numTails
    let percHeads = 0
    let percTails = 0

    if(numFlips > 0) {
        percHeads = Math.round((percHeads/numFlips)100)
        percTails = Math.round((percTails/numFlips)100)
    }
        document.getElementById('heads-percent').textContent=percHeads + '%'
        document.getElementById('heads-percent').textContent=percTails + '%'
})
    
    

    


    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        document.getElementById('clear').addEventListener('click', function () {
            numHeads = 0
            numTails = 0

            document.getElementById('messages').toggleAttribute
            document.getElementById
            document.getElementById
            document.getElementById

        })
        // TODO: Update the scoreboard (same logic as in flip button click handler)
document.querySelector()
})



//console.log('Hi')
//while (heads <= 0.5){}
//if(Math.random() < 0.50) {
//    heads++;
//} else { (Math.random() >= 0.5)
 //   tails++;
//}