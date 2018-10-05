const { getGraph } = require("./graph-converter");
const { run } = require("./run");

const TASK_NUMBER_TO_SOLVE = 2; // 1 or 2
const SOLUTIONS = {
    1: [
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
    ],
    2: [
        { x: 47, y: 48 },
        { x: 46, y: 48 },
        { x: 44, y: 48 },
        { x: 41, y: 48 },
        { x: 37, y: 48 },
        { x: 32, y: 49 },
        { x: 28, y: 50 },
        { x: 23, y: 50 },
        { x: 19, y: 49 },
        { x: 16, y: 47 },
        { x: 14, y: 44 },
        { x: 12, y: 40 },
        { x: 11, y: 35 },
        { x: 10, y: 29 },
        { x: 9, y: 24 },
        { x: 8, y: 20 },
        { x: 7, y: 17 },
        { x: 7, y: 14 },
        { x: 7, y: 12 },
        { x: 8, y: 10 },
        { x: 10, y: 9 },
        { x: 12, y: 9 },
        { x: 14, y: 10 },
        { x: 15, y: 12 },
        { x: 17, y: 15 },
        { x: 19, y: 17 },
        { x: 21, y: 18 },
        { x: 22, y: 18 },
        { x: 23, y: 17 },
        { x: 25, y: 15 },
        { x: 28, y: 14 },
        { x: 31, y: 14 },
        { x: 35, y: 15 },
        { x: 40, y: 17 },
        { x: 46, y: 19 },
        { x: 52, y: 20 },
        { x: 57, y: 21 },
        { x: 61, y: 22 },
        { x: 64, y: 23 },
        { x: 67, y: 24 },
        { x: 69, y: 26 },
        { x: 70, y: 28 },
        { x: 70, y: 30 },
        { x: 69, y: 32 },
        { x: 67, y: 34 },
        { x: 64, y: 37 },
        { x: 62, y: 41 },
        { x: 59, y: 44 },
        { x: 57, y: 47 },
        { x: 54, y: 51 },
    ]
};

function main() {
    const graph = getGraph(TASK_NUMBER_TO_SOLVE);
    const coordinates = SOLUTIONS[TASK_NUMBER_TO_SOLVE];
    run(graph, coordinates, 0, 0);
    console.log(`SOLUTION FOR TASK ${TASK_NUMBER_TO_SOLVE}`);
    console.log(JSON.stringify(coordinates));
}

main();