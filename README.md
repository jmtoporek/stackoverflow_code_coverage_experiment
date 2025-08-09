# About this repo

This repo is an experiment to demonstrate the different results for code coverage metrics based on different coding styles. The control of the experiment is the main branch.

This repo contains 6 different versions of a function that does the same thing - it accepts 3 boolean parameters; X, Y & Z. If any of the parameters are true, then each function returns true. Otherwise it returns false.

The main branch has 100% code coverage across all test cases. The test cases are as follows;

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

The purpose of these branches is to demonstrate how each file with a different style of coding affects the accuracy of code coverage metrics.
