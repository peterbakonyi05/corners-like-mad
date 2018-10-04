const { grid, height, width } = require("./grid1");

module.exports = {
    getGraph() {
        const graph = [];
        let i, j;
        for(i = 0; i < height; i++) {
            for(j = 0; j < width; j++) {
                graph[i] = graph[i] || [];
                graph[i].push(grid[i * width + j]);
            }
        }
        return graph;
    },

    
};