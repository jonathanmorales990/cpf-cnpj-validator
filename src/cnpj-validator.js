function validateCNPJ(value)  {
  const cnpj = value.replace(/[^\d]+/g, '');
  if (cnpj === '') {
    return false;
  }

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1{13}$/.test(cnpj)) {
    return false;
  }

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  const digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;

  if (result.toString() !== digits.charAt(0)) {
    return false;
  }

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }

  }

  result = sum % 11 < 2 ? 0 : 11 - sum % 11;

  if (result.toString() !== digits.charAt(1)) {
    return false;
  }

  return true;
}

export default validateCNPJ;