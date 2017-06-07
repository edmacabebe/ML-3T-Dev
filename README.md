# Slush Ml-3t [![Build Status](https://secure.travis-ci.org/edmacabebe/slush-ml-3t.png?branch=master)](https://travis-ci.org/edmacabebe/slush-ml-3t) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-ml-3t.png)](http://badges.enytc.com/for/npm/slush-ml-3t)

> Automated MarkLogic 3-Tier DEV environment

The intent is automate a DEV environment in 3-Tier architecture using 
1. [MarkLogic Application Server as Data Backend](www.marklogic.com)
2. [NodeJS and Express as Business Logic Middleware](www.npmjs.com) or soon -> Spring Boot
3. [Angular as Presentation Frontend](cli.angular.cio)
4. and a [Jenkins as CI/CD server](www.jenkins.org) 

All are deployed as [Docker images](www.docker.com) in a Docker Engine



## Getting Started

Make sure that the following are installed first.
1. Node
2. NPM
3. Docker
4. Java

Then install `slush-ml-3t` globally:

```bash
$ npm install -g slush-ml-3t
```

### Usage

Create a new folder for your project and Run the generator from within this new folder

```bash
$ mkdir my-ml-dev && cd my-ml-dev && slush ml-3t
```

Run the CI/CD Jenkins Docker and invoke the ff scripts from with in Jenkins

Build the built-in Dockerfile and run for the PresentationLayer

```bash
$ cd PRESENT && docker build -t my-logic-layer .
$ docker images
$ docker run -p 3000:3000 -d my-logic-layer
```
Build the built-in Dockerfile and run for the BusinessLayer

```bash
$ cd LOGIC && docker build -t my-logic-layer .
$ docker images
$ docker run -p 3000:3000 -d my-logic-layer
```

Build the built-in Dockerfile and run for the DataLayer

```bash
$ cd DATA && docker build -t my-logic-layer .
$ docker images
$ docker run -p 3000:3000 -d my-logic-layer
```

Call to initialize sample DB: Samplestack 
Open a browser and voila, get set to code!


## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/edmacabebe/slush-ml-3t/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/edmacabebe/slush-ml-3t/issues).

## License 

The MIT License

Copyright (c) 2017, edmacabebe

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

