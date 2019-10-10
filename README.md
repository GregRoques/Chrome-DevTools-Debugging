# Working with breakpoints in Chrome DevTools

JavaScript Breakpoints: https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints

## Line-of-code breakpoints in your code
Call debugger from your code to pause on that line. This is equivalent to a line-of-code breakpoint, except that the breakpoint is set in your code, not in the DevTools UI.
```
console.log('a');
console.log('b');
debugger;
console.log('c');
```

## Function breakpoints
Call debug(functionName), where functionName is the function you want to debug, when you want to pause whenever a specific function is called. You can insert debug() into your code (like a console.log() statement) or call it from the DevTools Console. debug() is equivalent to setting a line-of-code breakpoint on the first line of the function.
```
function sum(a, b) {
  let result = a + b; // DevTools pauses on this line.
  return result;
}
debug(sum); // Pass the function object, not a string.
sum();
```

### Make sure the target function is in scope
DevTools throws a ReferenceError if the function you want to debug is not in scope.
```
(function () {
  function hey() {
    console.log('hey');
  }
  function yo() {
    console.log('yo');
  }
  debug(yo); // This works.
  yo();
})();
debug(hey); // This doesn't work. hey() is out of scope.
```
Ensuring the target function is in scope can be tricky if you're calling debug() from the DevTools Console. Here's one strategy:
* Set a line-of-code breakpoint somewhere where the function is in scope.
* Trigger the breakpoint.
* Call debug() in the DevTools Console while the code is still paused on your line-of-code breakpoint.
