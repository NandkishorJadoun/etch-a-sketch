const container = document.querySelector("#container");
const reset = document.querySelector(".reset");
const changeSizeButton = document.querySelector(".change-size");

function makeGrid(size = 16){

    container.innerHTML = "";
    
    for(i=0;i<size;i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row-div");

        for(j=0; j<size;j++){
            let column = document.createElement("div");
            column.setAttribute("class", "grid-box-before");
            row.appendChild(column)

            column.addEventListener("mouseout", ()=>{
                column.setAttribute("class", "grid-box-after");
                column.setAttribute("style", `background-color: ${getRandomColor()}`)
                container.setAttribute("style", `border: ${getRandomColor()} solid 3px`)
            })

            reset.addEventListener("click" , ()=>{
                column.setAttribute("style", `background-color: black`);
            })
        }
        container.appendChild(row)
    }
}

function getRandomColor(){
    let r = Math.floor(Math.random() *255);
    let g = Math.floor(Math.random() *255);
    let b = Math.floor(Math.random() *255);

    return `rgb(${r},${g},${b})`
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