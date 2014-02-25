# component-istanbul

instruments component files with istanbul coverage

## Installation

    $ npm install component-istanbul

## Usage

This is extremely experimental for now.

I have the following commands running for me:

    $ mkdir -p coverage && component test phantom -R node_modules/component-istanbul/reporter.js > coverage/coverage.json && istanbul report

## License

  LGPLv3

