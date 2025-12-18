const countCoveredBuildings = (n, buildings) => {
    let coveredCount = 0;
    let row_min = Array(n + 1).fill(n);
    let row_max = Array(n + 1).fill(0);
    let col_min = Array(n + 1).fill(n);
    let col_max = Array(n + 1).fill(0);

    buildings.forEach(([r, c]) => {

        if (row_min[r] > c) row_min[r] = c;
        if (row_max[r] < c) row_max[r] = c;

        if (col_min[c] > r) col_min[c] = r;
        if (col_max[c] < r) col_max[c] = r;
    });

    buildings.forEach(([r, c]) => {
        if (row_min[r] < c && row_max[r] > c && col_min[c] < r && col_max[c] > r) {

            coveredCount++;
        }
    });

    return coveredCount;
}

countCoveredBuildings(5, [[1, 3], [3, 2], [3, 3], [3, 5], [5, 3]])
