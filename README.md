# About this repo

This repo is an experiment to demonstrate the different results for code coverage metrics based on different coding styles. The control of the experiment is the main branch.

This repo is in Node/Javascript, and uses Jest for testing. Before running these tests you should have Node.js, preferably the latest, and run the following command;

`npm install`

Jest by default uses Istanbul for measuring code coverage. To view the results on your local machine as well as properly understand the purpose of these tests, you should do as follows;

`npm test -- --coverage`

The coverage modifier shows the metrics

This repo contains 6 different versions of a function that does the same thing - it accepts 3 boolean parameters; X, Y & Z. If any of the parameters are true, then each function returns true. Otherwise it returns false.

The main branch has 100% code coverage across all test cases and all types of code coverage including;

1. Line coverage
1. Statement Coverage
1. Branch Coverage
1. Function/Method Coverage

you can read more about what each type of coverage is here;

https://www.sonarsource.com/learn/code-coverage/#line-coverage

The functional test cases are as follows;

1. X is true
1. Y is true
1. Z is true
1. All parameters are false

The branches for this repo are designed to demonstrate what happens to code coverage metrics when the code remains the same but certain selected tests are disabled. The test scenarios are as follows;

1. All tests cases are executed
1. Disable test for all parameters are false
1. Disable tests for Y and Z are true
1. Disable all tests except X are true
1. Disable all tests except Z are true

When you change branches and execute the tests you can see how each file with a different style of coding affects the accuracy of code coverage metrics. The more concise coding styles code coverate metrics are more likely to give false impression of good code coverage, as they are closer to 100% even with test cases missing.

The more verbose/explicit the code is however, the more informative and accurate the code coverage metrics are, and the harder it is to fool the coverage tool.
