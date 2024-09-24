
const answers = document.getElementsByClassName("question-answer")

document.getElementsByClassName("question-answer").item(0).style.height = document.getElementsByClassName("question-answer").item(0).scrollHeight + "px"

let count = document.getElementsByClassName("question-answer").length


for(let i = 0 ; i < count ; i++){

    let x = i;
    let y = i+1

    const click = new Event("click")

    document.getElementsByClassName("question-title").item(i).addEventListener("click", e => {
        document.getElementsByClassName("icon").item(y).dispatchEvent(click)
    })

    document.getElementsByClassName("icon").item(y).addEventListener("click", e => {

        

        let src = e.target.getAttribute("src");

        e.target.setAttribute("src",switch_image(src))

        document.getElementsByClassName("question-answer").item(x).classList.toggle("active")

        document.getElementsByClassName("question-answer").item(x).getAttribute("class") == "text question-answer"

        ? document.getElementsByClassName("question-answer").item(x).style.height = "0"
        
        : document.getElementsByClassName("question-answer").item(x).style.height = document.getElementsByClassName("question-answer").item(x).scrollHeight + "px"

    })
}


const icons = ["./assets/images/icon-plus.svg","./assets/images/icon-minus.svg"]

function switch_image(src){
    if(src == icons[0]){
        return icons[1];
    }
    return icons[0]
}
