const container = document.querySelector("#container");

function makeGrid(size){
    for(i=0;i<size;i++){
        let row = document.createElement("div")
        row.setAttribute("class", "row-div")

        for(j=0; j<size;j++){
            let column = document.createElement("div")
            column.setAttribute("class", "column-div")
            row.appendChild(column)
        }
        container.appendChild(row)
    }
}

makeGrid(16);