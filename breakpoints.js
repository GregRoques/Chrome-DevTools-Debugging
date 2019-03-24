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
        // in DevTools Sources, adding a conditional breakpoint to make sure "doubled" is
        // an integer and equal to num if divided by 2.
        Ex: if(doubled > )
    debugger;
    doubledArray.push(doubled)
    console.log(doubledArray)
    debugger;
    document.querySelector('.returnDoubledArray').innerHTML = `<p>${doubledArray}</p>`
});

// Types of DOM change breakpoints
// Subtree modifications. Triggered when a child of the currently-selected node is removed or added, or the contents of a child are changed. Not triggered on child node attribute changes, or on any changes to the currently-selected node.

// Attributes modifications: Triggered when an attribute is added or removed on the currently-selected node, or when an attribute value changes.

// Node Removal: Triggered when the currently-selected node is removed.


// ===================== Event Listeners Breakpoints

    // Expand the Event Listener Breakpoints pane. DevTools shows a list of event categories, such as Animation.
    // For things like MouseOver, click events, etc.


// ===================== Function BreakPoints

function sum(a, b) {
    let result = a + b; // DevTools pauses on this line.
    return result;
  }
  debug(sum); // Pass the function object, not a string.
  sum();