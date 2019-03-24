// Reference
    // Chrome Dev Tools 101: https://www.youtube.com/watch?v=H0XScE08hy8
    // Breakpoints in Chrome Dev Tools: https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints


// ================ Line of Code Breakpoints

// Example:

const numbers = [1,2,3,4,5,6,7,8,9]

let doubledArray = []

const myMap = numbers.map((num)=>{
    let doubled = num * 2
    console.log(doubled);
    debugger;
    doubledArray.push(doubled)
    console.log(doubledArray)
    debugger;
    document.querySelector('.returnDoubledArray').innerHTML = `<p>${doubledArray}</p>`
});