const { Graph, astar } = require("./astar");
const { getGraph } = require("./graph-converter");
const { run } = require("./run");

async function main() {
    // var graph = new Graph([
    //     [1, 1, 1, 1],
    //     [0, 1, 1, 0],
    //     [0, 0, 1, 1]
    // ]);
    // var start = graph.grid[0][0];
    // var end = graph.grid[1][2];
    // // pavel: http://theory.stanford.edu/~amitp/GameProgramming/Heuristics.html#manhattan-distance
    // const result = astar.search(graph, start, end);
    const graph = getGraph();

    // 22 steps
    // [
    //     { x: 0, y: 4 },
    //     { x: 1, y: 4 },
    //     { x: 3, y: 4 },
    //     { x: 5, y: 5 },
    //     { x: 8, y: 7 },
    //     { x: 10, y: 9 },
    //     { x: 11, y: 12 },
    //     { x: 12, y: 16 },
    //     { x: 13, y: 19 },
    //     { x: 14, y: 22 },
    //     { x: 15, y: 24 },
    //     { x: 16, y: 25 },
    //     { x: 17, y: 25 },
    //     { x: 19, y: 24 },
    //     { x: 21, y: 22 },
    //     { x: 22, y: 19 },
    //     { x: 23, y: 17 },
    //     { x: 25, y: 15 },
    //     { x: 28, y: 14 },
    //     { x: 32, y: 14 },
    //     { x: 36, y: 14 },
    //     { x: 39, y: 14 }
    // ];

    //19 steps
    // { x: 0, y: 1 },
    //     { x: 1, y: 2 },
    //     { x: 3, y: 4 },
    //     { x: 6, y: 6 },
    //     { x: 9, y: 9 },
    //     { x: 11, y: 13 },
    //     { x: 12, y: 16 },
    //     { x: 12, y: 19 },
    //     { x: 13, y: 21 },
    //     { x: 14, y: 22 },
    //     { x: 16, y: 23 },
    //     { x: 18, y: 23 },
    //     { x: 19, y: 22 },
    //     { x: 20, y: 20 },
    //     { x: 22, y: 17 },
    //     { x: 25, y: 15 },
    //     { x: 29, y: 14 },
    //     { x: 34, y: 13 },
    //     { x: 39, y: 13 }
    
    const coordinates = [
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 3, y: 4 },
        { x: 6, y: 6 },
        { x: 9, y: 9 },
        { x: 11, y: 13 },
        { x: 12, y: 16 },
        { x: 12, y: 19 },
        { x: 13, y: 21 },
        { x: 14, y: 22 },
        { x: 16, y: 23 },
        { x: 18, y: 23 },
        { x: 19, y: 22 },
        { x: 20, y: 20 },
        { x: 22, y: 17 },
        { x: 25, y: 15 },
        { x: 29, y: 14 },
        { x: 34, y: 13 },
        { x: 39, y: 13 }
    ];
    run(graph, coordinates, 2, 0);
    console.log(JSON.stringify(coordinates));
}

main();