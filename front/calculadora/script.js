function somar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado').value = num1 + num2;
  }
  
  function subtrair() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado').value = num1 - num2;
  }
  
  function multiplicar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado').value = num1 * num2;
  }
  
  function dividir() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
      document.getElementById('resultado').value = num1 / num2;
    } else {
      alert('Divisão por zero não é permitida');
    }
  }