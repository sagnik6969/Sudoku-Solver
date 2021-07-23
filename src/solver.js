
const N = 9;
function is_valid_helper_3_3(grid, i, j, num) {
    //set<int> temp;
    //fill(ch.begin(), ch.end(), 0);
    for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
            if (grid[k][l] === num) {

                // cout<<grid[i][j]<<endl;;

                return false;

            }

        }
    }

    //if(temp==s) return true;
    return true;

}

function is_valid(grid, row, col, num) {
    // print(grid);
    // cout<<endl;
    //fill(ch.begin(), ch.end(), 0);
    for (let i = 0; i < N; i++) {
        if (grid[i][col] === num) return false;
        //ch[grid[i][col]] = true;

    }

    //fill(ch.begin(), ch.end(), 0);
    for (let i = 0; i < N; i++) {
        if (grid[row][i] === num) return false;
        //ch[grid[row][i]] = true;

    }

    row = (Math.floor(row / 3)) * 3;
    col = (Math.floor(col / 3)) * 3;
    if (!is_valid_helper_3_3(grid, row, col, num)) return false;

    return true;



}


function solve(grid, i, j) {
    //cout<<"Step "<<step++<<endl;
    if (j === 9 && i === 8) {
        //  print(grid);
        //  cout<<endl;
        //if(is_valid(grid)) return true;
        return true;
    }

    if (j === 9) {
        j = 0;
        i++;
    }

    if (grid[i][j] !== 0) {
        return solve(grid, i, j + 1);
    }

    for (let k = 1; k <= N; k++) {
        if (!is_valid(grid, i, j, k)) continue;
        grid[i][j] = k;
        //cout<<is_valid(grid)<<endl;


        if (solve(grid, i, j + 1)) return true;

    }

    grid[i][j] = 0;

    return false;




}


function initialValidation_helper_3_3(grid, i, j) {
    var ch = new Array(10);
    for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
            if (ch[grid[k][l]] && grid[k][l] !== 0) {

                // cout<<grid[i][j]<<endl;;

                return false;

            }
            ch[grid[k][l]] = true;
        }
    }

    //if(temp==s) return true;
    return true;

}


function initialValidation(grid) {
    var ch = new Array(10);
    //for (let i = 0; i < 9; i++) ch[i] = false;

    for (let i = 0; i < 9; i++) {
        for (let i = 0; i < 10; i++) ch[i] = false;
        for (let j = 0; j < 9; j++) {
            if (ch[grid[i][j]] && grid[i][j] !== 0) return false;
            ch[grid[i][j]] = true;
        }

    }


    //for (let i = 0; i < 9; i++) ch[i] = false;

    for (let i = 0; i < 9; i++) {

        for (let i = 0; i < 10; i++) ch[i] = false;

        for (let j = 0; j < 9; j++) {
            if (ch[grid[j][i]] && grid[j][i] !== 0) return false;
            ch[grid[j][i]] = true;
        }

    }

    if (!initialValidation_helper_3_3(grid, 0, 0)) return false;
    if (!initialValidation_helper_3_3(grid, 0, 3)) return false;
    if (!initialValidation_helper_3_3(grid, 0, 6)) return false;
    if (!initialValidation_helper_3_3(grid, 3, 0)) return false;
    if (!initialValidation_helper_3_3(grid, 3, 3)) return false;
    if (!initialValidation_helper_3_3(grid, 3, 6)) return false;
    if (!initialValidation_helper_3_3(grid, 6, 0)) return false;
    if (!initialValidation_helper_3_3(grid, 6, 3)) return false;
    if (!initialValidation_helper_3_3(grid, 6, 6)) return false;





    return true;

}



function solver(grid) {

    //    let grid =[ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
    //    [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
    //    [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
    //    [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
    //    [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
    //    [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
    //    [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
    //    [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
    //    [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
    var preparedGrid = new Array(9);
    for (let i = 0; i < 9; i++) {
        preparedGrid[i] = new Array(9)
    }

    var count = 0;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let t = grid[count].value;
            count++;
            if (t) {
                preparedGrid[i][j] = Number(t);

            }
            else {
                preparedGrid[i][j] = Number(0);
            }
        }
    }


    // let copy = JSON.parse(JSON.stringify(preparedGrid));
    // console.log(copy);


    if (!initialValidation(preparedGrid)) {

        let emptyArr = [];
        return emptyArr;


    }

    if (solve(preparedGrid, 0, 0)) {
        //console.log(preparedGrid);
        return preparedGrid;
    }
    else {
        console.log("No solution exists");
        let emptyArr = [];
        return emptyArr;

    }




}

export default solver
//main();
