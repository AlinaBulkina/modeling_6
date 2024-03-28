function drawAll() {
    const L = parseFloat(document.getElementById('L').value);
    const R = parseFloat(document.getElementById('R').value);
    const C = parseFloat(document.getElementById('C').value);

    drawGraph(L, R, C);
}

function drawGraph(L, R, C) {
    let I = 0;
    let q = 1;
    const step = 0.01;

    const U_data = [];
    const I_data = [];

    for (let k = 0; k < 10000; k++) {
        q += I * step;
        I += (-R * I - q / C) / L * step;
        U_data.push(q / C);
        I_data.push(I);
    }

    Plotly.newPlot('graph',
        [{
            x: I_data,
            y: U_data,
        }],
        {
            xaxis: {title: 'Ток (А)'},
            yaxis: {title: 'Напряжение (В)'}
        });
}


[...document.querySelectorAll('#inputForm input')]
    .forEach(input => input.addEventListener('change', (e) => {
        drawAll();
    }));

drawAll();
