#### Tests and Linter status:
[![Actions Status](https://github.com/sharaendy/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/sharaendy/frontend-project-lvl2/actions)  [![Node CI](https://github.com/sharaendy/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/sharaendy/frontend-project-lvl2/actions/workflows/nodejs.yml)

#### CodeClimate: Test Coverage and Maintainability:
[![Test Coverage](https://api.codeclimate.com/v1/badges/9a557dced408d87e5cb1/test_coverage)](https://codeclimate.com/github/sharaendy/frontend-project-lvl2/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/9a557dced408d87e5cb1/maintainability)](https://codeclimate.com/github/sharaendy/frontend-project-lvl2/maintainability)



## Installation

- `git clone` https://github.com/sharaendy/frontend-project-lvl2
- `make install` - *establish dependencies*
- `make link` - *install the app 'gendiff'*



## Description

The CLI-utility compares two configuration files with the format **.json**, **.yaml** or **.yml**. The application takes two arguments on the command line - the paths to these files (it works both with *relative* and *absolute* paths) and outputs the result of the comparison in the specified format.   

- #### Using:

```bash
gendiff [options] <filepath1> <filepath2>
```

- #### Options:

```bash
-h, --help 
```

​	select format: 

```bash
-f, --format <format>
```

​	available formats:

```bash
stylish (default)
plain
json
```

- #### Example

```bash
gendiff -f stylish <filepath1> <filepath2>
```



## Features

- Crossplatform;
- The code is built in an immutable style;
- Implemented code testing ( Jest );
- On Codeclimate the coverage is checked by tests, the badge displays it;
- Github Actions checks coding standards (eslint airbnb) and runs tests;
- The code is intentionally (for training purposes) built on variables, loops, as well as higher-order functions and recursion;
- The internal representation is a tree, where each element is a node that has its own type;



## Demonstration

##### 1. Comparison of "flat" .json files (stylish format);

[![asciicast](https://asciinema.org/a/0FRB4KTZ4pH4NY0BCDnC8Ljfj.svg)](https://asciinema.org/a/0FRB4KTZ4pH4NY0BCDnC8Ljfj)

##### 2. Comparison of "flat" .yaml and .yml files (format stylish);

[![asciicast](https://asciinema.org/a/WlfEET07A0V07EGKQxjvZRfQL.svg)](https://asciinema.org/a/WlfEET07A0V07EGKQxjvZRfQL)

##### 3. Comparison of multi-level .json files (format stylish);

[![asciicast](https://asciinema.org/a/Ux6R3fOdasYc9pedxtt5zG32u.svg)](https://asciinema.org/a/Ux6R3fOdasYc9pedxtt5zG32u)

##### 4. Comparison of multi-level .yaml and .yml files (format stylish);

[![asciicast](https://asciinema.org/a/Q6AAr3oWutGnCtpojGeeVRCxl.svg)](https://asciinema.org/a/Q6AAr3oWutGnCtpojGeeVRCxl)

##### 5. Comparison of multi-level .json files (plain format);

[![asciicast](https://asciinema.org/a/pyrL6wdh6sV31k1dj2maH2bQ1.svg)](https://asciinema.org/a/pyrL6wdh6sV31k1dj2maH2bQ1)

##### 6. Comparison of multi-level .yaml and .yml files (plain format);

[![asciicast](https://asciinema.org/a/7sIhMiF82JPnBHZ6e5gfzrBui.svg)](https://asciinema.org/a/7sIhMiF82JPnBHZ6e5gfzrBui)

##### 7. Comparison of multi-level .json files (json output format);

[![asciicast](https://asciinema.org/a/BKBPCBRfMZf13bAvXkvuJ4mWU.svg)](https://asciinema.org/a/BKBPCBRfMZf13bAvXkvuJ4mWU)

##### 8. Comparison of multi-level .yaml and .yml files (json output format);

[![asciicast](https://asciinema.org/a/egbO6AosrNFYzbQlT2u92GV4M.svg)](https://asciinema.org/a/egbO6AosrNFYzbQlT2u92GV4M)

## Authored by

Шараевский Андрей (sharaendy)

[aash7133@gmail.com](mailto:aash7133@gmail.com)
