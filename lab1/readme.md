# EventLoop

JS is synchronous and
single threaded bydefault

## There can be async behaviour

- with BrowserAPI -
  setTimeout, setInterval,
  setImmediate, nextTick
- with promises
- with event handlers

# promises

- a function not executed immeditaely but it must be executed after a while it has some status during the
- execution at final it may resolve()= success reject = unsucess'
- call back functtion => that pasa as argument or the parameter to another function

# Modern js is divided into 2 category

  - CommonJS (.cjs=>supports OOPS ->require)
  - priority(nextTick,Promise,SetImmediate)
  - ModuleJS (.mjs)-> follow modular approach ->
  - priority(promises,nextTick,setImmediate/setTimeout)
