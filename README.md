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

The following list are the branches and their corresponding test scenario;

1. experiment_01_all_tests_active - All tests cases are executed
1. experiment_02_disable_all_false - Disable test for all parameters are false
1. experiment_03_disable_y_and_z_are_true - Disable tests for Y and Z are true
1. experiment_04_all_tests_except_x_is_true - Disable all tests except X are true
1. experiment_05_disable_all_tests_except_z_is_true - Disable all tests except Z are true

The more verbose/explicit the code is however, the more informative and accurate the code coverage metrics are, and the harder it is to fool the coverage tool.

### Here are the code coverage stats for all tests are enabled, branch `experiment_01_all_tests_active`

| File                                      | % Stmts                              | % Branch                             | % Funcs                              | % Lines                              | Uncovered Line #s |
| ----------------------------------------- | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ----------------- |
| All files                                 | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> |
| condition_control.js                      | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> |
| condition_if_else_grouped.js              | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> |
| condition_if_else_separate.js             | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> |
| condition_if_else_then_return_separate.js | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> |
| condition_switch_grouped.js               | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> |
| condition_switch_separate.js              | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> | <span style="color:green">100</span> |

### Here are the code coverage stats forthe variation with the most compelling results, branch `experiment_05_disable_all_tests_except_z_is_true`

| File                                      | % Stmts                                 | % Branch                                | % Funcs                              | % Lines                                 | Uncovered Line #s                      |
| ----------------------------------------- | --------------------------------------- | --------------------------------------- | ------------------------------------ | --------------------------------------- | -------------------------------------- |
| All files                                 | <span style="color:yellow">66.66</span> | <span style="color:yellow">53.57</span> | <span style="color:green">100</span> | <span style="color:yellow">66.66</span> |
| condition_control.js                      | <span style="color:green">100</span>    | <span style="color:green">100</span>    | <span style="color:green">100</span> | <span style="color:green">100</span>    |
| condition_if_else_grouped.js              | <span style="color:yellow">75</span>    | <span style="color:green">80</span>     | <span style="color:green">100</span> | <span style="color:yellow">75</span>    | <span style="color:red">5</span>       |
| condition_if_else_separate.js             | <span style="color:yellow">62.5</span>  | <span style="color:yellow">50</span>    | <span style="color:green">100</span> | <span style="color:yellow">62.5</span>  | <span style="color:red">3,5,9</span>   |
| condition_if_else_then_return_separate.js | <span style="color:yellow">66.66</span> | <span style="color:yellow">50</span>    | <span style="color:green">100</span> | <span style="color:yellow">66.66</span> | <span style="color:red">4,6,10 </span> |
| condition_switch_grouped.js               | <span style="color:yellow">75</span>    | <span style="color:red">25</span>       | <span style="color:green">100</span> | <span style="color:yellow">75</span>    | <span style="color:red">8 </span>      |
| condition_switch_separate.js              | <span style="color:yellow">50</span>    | <span style="color:red">25</span>       | <span style="color:green">100</span> | <span style="color:yellow">50</span>    | <span style="color:red">4-6,10</span>  |

Take note of how the more concise code, in the file condition_control.js file has 100% code coverage despite 3 out of 4 tests have been disabled. That would indicate that the more concise your code is the easier it is to get an inflated code coverage score with sub standard test coverage.

On the other hand all the other coding style variations do a better job indicating the code coverage requires additional tests.
