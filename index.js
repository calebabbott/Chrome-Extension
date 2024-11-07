let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn") 
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    /*et activeTab = tabs[0]
    let activeTabId = activeTab.id*/
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a><button class="delete-btn" data-index="${i}">X</button>
            </li>
        `
    }
    ulEl.innerHTML = listItems  


const deleteButtons = document.querySelectorAll(".delete-btn")
    deleteButtons.forEach((button) => {
        button.addEventListener("click", function() {
            const index = button.getAttribute("data-index")
            myLeads.splice(index, 1) 
            localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
            render(myLeads) 
        })
    })
}