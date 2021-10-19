# Feedback on Showcase from LT

## Pros
- I like how simple this repo is! There isn't any unnecessary code or conditionals.
- Nice use of third party libraries
- Tests are set up well with jest (my favorite test runner)
- The program works!

## Cons
- I think the biggest thing I would have liked to see was testing around the validation method. This is really where most all of the logic is. If you pull this method into a seperate function, you could test it in isolation.
- Tests have this warning: `Jest did not exit one second after the test run has completed.` Which basically means you're not awaiting the promise. The `run` function doesn't return the axios promise and it also looks like the run function then calls the `start` method and the inquirer module isn't mocked so the test hangs. It'd probably be a good idea to just mock the `inquirer` module as well.
- The first time the program is run, it looks like the `run` method is exported instead of the start method and there is no validation on the input. Therefore the first time you run the `node app` an axios request is made with undefined.


## Other things that are really just preferences of mine...
- Would have liked to see async/await syntax inside `console.js`
- The pattern of recursively calling `start() ... run()` is sort of confusing. I think a while loop would have read better.
- There were some unused packages in `package.json`

If you have any questions or are interested in working through some of the fixes let me know!

