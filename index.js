function CountFunction(){

    let R = document.getElementById("R").value; 
    let w = document.getElementById("w").value; 
    let B = document.getElementById("B").value; 

    //converting everything to SI
    let t = [];
    let E = [];
    let I = [];

    for(let i = 0; i < 5*2*Math.PI/w; i+=5*2*Math.PI/w/300)
    {
        t.push(i);
        E.push(B*w*Math.cos(w*i));
        I.push(B*w*Math.cos(w*i)/R);
    }

    let layout_1 = {
        title: 'Graph of ε(t)',
        x_axis: {
            title: 'Time t(c)'
        },
        y_axis: {
            title: 'ε(t), В'
        }
    };

    let layout_2 = {
        title: 'Graph of I(t)',
        x_axis: {
            title: 'Time t(c)'
        },
        y_axis: {
            title: 'I(t), А'
        }
    };

    Plotly.newPlot(
        "graph_1",
        [{
            mode: 'lines',
            type: 'scatter',
            x: t,
            y: E,
        }],
        layout_1
    );

    Plotly.newPlot(
        "graph_2",
        [{
            mode: 'lines',
            type: 'scatter',
            x: t,
            y: I,
        }],
        layout_2
    );

    return false;
}
