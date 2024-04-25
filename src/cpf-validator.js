function validateCPF(value) {
  if (value && value.length >= 11) {
    value = value.replace(/[^a-zA-Z0-9]/g, '');
    if (
      value === '00000000000' ||
      value === '11111111111' ||
      value === '22222222222' ||
      value === '33333333333' ||
      value === '44444444444' ||
      value === '55555555555' ||
      value === '66666666666' ||
      value === '77777777777' ||
      value === '88888888888' ||
      value === '99999999999'
    ) {
      return false;
    }

    let qtd = 10;
    let aux = 0;

    for (let i = 0; i < 9; i++) {
      aux += parseInt(value[i]) * qtd;
      qtd -= 1;
    }

    aux = aux * 10;
    let result = aux % 11;

    if (result === 10 || result === 11) {
      result = 0;
    }

    if (result !== parseInt(value[9])) {
      return false;
    }

    qtd = 11;
    aux = 0;

    for (let i = 0; i < 10; i++) {
      aux += parseInt(value[i]) * qtd;
      qtd -= 1;
    }

    aux = aux * 10;
    result = aux % 11;

    if (result === 10 || result === 11) {
      result = 0;
    }

    if (result !== parseInt(value[10])) {
      return false;
    }

    return true;
  }
  else {
    return false;
  }
}

export default validateCPF;