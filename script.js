const number_btns = document.getElementsByClassName("select")

let counter = number_btns.length


for(let i = 0 ; i < counter ; i++){
    number_btns.item(i).addEventListener("click", () => {
        
        let has_item = document.getElementsByClassName("selected").item(0)
        
        if(has_item){
            document.getElementsByClassName("selected").item(0).classList.toggle("selected")
        }

        document.getElementsByClassName("select").item(i).classList.toggle("selected")
    })
}


window.document.getElementsByTagName("button").item(0).addEventListener("click", () => {

    let selected_stars = document.getElementsByClassName("selected").item(0)

    if(selected_stars != null){
        document.getElementsByTagName("main").item(0).innerHTML = `<header class="end">
    <img src="./images/illustration-thank-you.svg" alt="thank-you" />
    <p class="text description-end">You selected ${selected_stars.textContent} out of 5</p>
  </header>
  <section class="end">
    <h1 class="text end-title">Thank you!</h1>
    <p class="text end-comment">We appreciate you taking the time to give a rating. If you ever need more support, 
      don't hesitate to get in touch!</p>
  </section>`
    }
})