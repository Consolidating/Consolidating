
//Part of: The Modern Javascript Bootcamp (2020) projects by Colt Steele and Stephen Grider

const { hash } = window.location

const message = atob(hash.replace("#", ""));
const linkInput = document.querySelector("#link-input")

if (message) {
    document.querySelector("#message-form").classList.add("hide")
    document.querySelector("#message-show").classList.remove("hide")
    document.querySelector("#content").innerHTML = message;
}



document.querySelector('#create-link-btn').addEventListener('click', event => {
    event.preventDefault();



    const input = document.querySelector('#message-input');

    if (input.value){
        console.log(input.value)
        document.querySelector("#message-form").classList.add('hide')
        document.querySelector("#link-form").classList.remove('hide')
        const encrypted = btoa(input.value)
        linkInput.value = `${window.location}#${encrypted}`
    }
    else {
        input.value = "There is no Message!"
    }


})


//Initializing Material JS
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    var tooltipInstance = M.Tooltip.init(elems);
    var elems = document.querySelectorAll('.modal');
    var modalInstance = M.Modal.init(elems);
    var elems = document.querySelectorAll('.collapsible');
    var CollapsibleInstance = M.Collapsible.init(elems);

  });



//Copy Clipboard

const copyClipboardBtn = document.querySelector("#copy-clipboard-btn")

copyClipboardBtn.addEventListener('click', event => {
    event.preventDefault();

    linkInput.select();
    
    document.execCommand('copy')


})


const openLinkBtn = document.querySelector("#open-link-btn")
openLinkBtn.addEventListener('click', event=>{
    event.preventDefault();
    window.open(linkInput.value, '_blank');
})

