function secuenciaFibonacci() {

    const input = document.getElementById("numeroInput");
    const entrada = Number(input.value);

    if (isNaN(entrada) || entrada <= 0) {
        document.getElementById("salida").innerText = "Error: Ingresa un número válido mayor que 0.";
        return;
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < entrada; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    fibonacci = fibonacci.slice(0, entrada);

    const elementoSalida = document.getElementById("salida");
    elementoSalida.innerText = "Secuencia de Fibonacci: " + fibonacci.join(", ");
}
