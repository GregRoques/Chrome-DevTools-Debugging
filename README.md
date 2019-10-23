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



## Console API Reference

Reference: https://developers.google.com/web/tools/chrome-devtools/console/api

* console.log() 
  * outputs a message to the web console
  
* console.dir()
  * shows JSON list of properties of a JS object
  
* console.assert()
  * Writes an error to the console when expression evaluates to false.
  
```
      Ex: 
        const x = 5;
        const y = 3;
        const reason = 'x is expected to be less than y';
        console.assert(x < y, {x, y, reason});
```
      
* console.group()
  * 'Visually groups messages together until console.groupEnd(label) is called. Use console.groupCollapsed(label) to collapse the group when it's initially logged to the Console.'
  
```
        Ex:
            const label = 'Adolescent Irradiated Espionage Tortoises';
            console.group(label);
            console.info('Leo');
            console.info('Mike');
            console.info('Don');
            console.info('Raph');
            console.groupEnd(label);
```

* console.table()
  * Logs an Array of objects as a table
  
* console.time()
  * Starts a new timer. Call console.timeEnd([label]) to stop the timer and print the elapsed time to the Console.
  
```
    Ex:
        console.time();
        for (var i = 0; i < 100000; i++) {
        let square = i ** 2;
        }
        console.timeEnd();   
  ```

# Additional JavaScript Debugging Tools (not related to Chrome)

* JSBin (debugger): https://jsbin.com/?html,output

* JSLint: 
    * http://www.jslint.com (on web) 
    * In Visual Studio Code: https://www.npmjs.com/package/jslint
    
    ```
    $ npm i jslint
    ```
