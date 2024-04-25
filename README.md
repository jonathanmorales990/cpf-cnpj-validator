# CPF and CNPJ Validators

This NPM package provides a straightforward solution for validating the correctness of CPFs and CNPJs.

## Setup

Install the dependencies:

```bash
# yarn
yarn install cpf-and-cnpj-validators

# npm
npm install cpf-and-cnpj-validators

# pnpm
pnpm install cpf-and-cnpj-validators --shamefully-hoist
```

## How to use
Simply import the functions and utilize them. They will return true if the input is valid and false if it's not.

```bash
const { validateCPF, validateCNPJ } = require('cpf-and-cnpj-validators');

console.log(validateCPF('377.847.960-13')); # Returns true if valid, false otherwise
console.log(validateCNPJ('19.394.478/0001-71')); # Returns true if valid, false otherwise
console.log(validateCPF('37784796013')); # Returns true if valid, false otherwise
console.log(validateCNPJ('19394478000171')); # Returns true if valid, false otherwise
```
