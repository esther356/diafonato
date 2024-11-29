const calcularEdadDiofanto = () => {
    const eq1 = x => x / 6; // Infancia
    const eq2 = x => x / 12; // Juventud
    const eq3 = x => x / 7; // Vida de casado
    const hijo = x => x / 2; // Vida del hijo

    let x = 84; // Edad de Diofanto al morir

    let resultado = `
        Infancia: ${eq1(x)} años
        Juventud: ${eq2(x)} años
        Vida de casado: ${eq3(x)} años
        Años antes de tener un hijo: 5 años
        Vida del hijo: ${hijo(x)} años
        Años después de la muerte del hijo: 4 años
        Edad total de Diofanto al morir: ${x} años
    `;

    document.getElementById('codigo').textContent = resultado;
};

calcularEdadDiofanto();