function validator() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const validationResultInput = document.getElementById('validationResult');

  function validateForm() {
    if (!input.value || !Number.isInteger(Number(input.value))) {
      console.log('early return');
      validationResultInput.innerHTML = 'Invalid';
      return;
    }
    const validationRules = [(n) => n > 0, (n) => n < 100, (n) => n % 2 === 0];
    const isValid = validationRules.every((rule) => rule(Number(input.value)));
    validationResultInput.innerHTML = isValid ? 'Valid' : 'Invalid';
  }

  function resetForm() {
    input.value = '';
    validationResultInput.innerHTML = '';
  }

  validateButton.addEventListener('click', () => validateForm());
  clearButton.addEventListener('click', () => resetForm());
}

validator();
