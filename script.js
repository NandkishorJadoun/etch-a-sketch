const container = document.querySelector("#container");
const reset = document.querySelector(".reset")


function makeGrid(size = 16){
    for(i=0;i<size;i++){
        let row = document.createElement("div")

        for(j=0; j<size;j++){
            let column = document.createElement("div")
            column.setAttribute("class", "grid-box-before")
            row.appendChild(column)

            column.addEventListener("mouseout", ()=>{
                column.setAttribute("class", "grid-box-after")
            })

            reset.addEventListener("click" , ()=>{
                column.setAttribute("class", "grid-box-before")
            })
        }
        container.appendChild(row)
    }
}

makeGrid(16);