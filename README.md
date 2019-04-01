# Project Name

One sentence description.

## Introduction

### Intention

Description of intention behind the project and/or it's business value.

### Key Logic

High level (less technical) description of how the program works, a graphic would be nice.

- Reading from AWS bucket, transforming, pushing to SNS (abstract description, not links, those are in deployment/app_config.yml already)
- If it provides a REST API => Link to API doc (maybe in subfolder of project).
- Dependencies to input/output/interaction with other projects with their respective GitHub links

## Build

### Prerequisites

Setting up build environment, installing dependencies (hopefully this section is short!)

Run `auto/setup` script to set up the build environment. This will e.g. set up a git prepush hook to run tests before a push to the server.

### Usage

- How build, test and run locally
- Required environment variables
- Should be nothing more than 
  - Run `auto/dev-environment bash` to run a local dockerized instance
  - Run `auto/test` to run the tests in a dockerized environment

## Organisational

### Deployment

Links to CI, staging, prod, monitoring, code metrics, ...

### Maintainers

name, email, slack
