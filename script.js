const container = document.querySelector("#container");
const reset = document.querySelector(".reset");
const changeSizeButton = document.querySelector(".change-size");

function makeGrid(size = 16){
    for(i=0;i<size;i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row-div");

        for(j=0; j<size;j++){
            let column = document.createElement("div");
            column.setAttribute("class", "grid-box-before");
            row.appendChild(column)

            column.addEventListener("mouseout", ()=>{
                column.setAttribute("class", "grid-box-after");
            })

            reset.addEventListener("click" , ()=>{
                column.setAttribute("class", "grid-box-before");
            })
        }
        container.appendChild(row)
    }
}

changeSizeButton.addEventListener("click", ()=>{
    let newSize = prompt("Choose from 1 to 100", "");
    if(newSize == undefined||newSize == null || newSize == ''){
        return;
    }
    else if(newSize>100 || newSize<0){
        alert("That's not between 1 and 100");
    }
    else{
        makeGrid(newSize);
    }
})

makeGrid();