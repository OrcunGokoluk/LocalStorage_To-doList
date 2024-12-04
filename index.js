let todoItems;
//buttons

const addBtnEl=document.getElementById("add_btn");
const deleteBtnEl=document.getElementById("delete_btn");
// const updateBtnEl=document.getElementById("update_btn");
const clearBtnEl=document.getElementById("clear_btn");

//textbar

const textbarEl = document.getElementById("textEl"); //textbarEl.value -> içindeki değeri çekmek için

const mainlistEl = document.getElementById("main-list")

function addToStorage()
{
    if(localStorage.getItem('todos')===null)
    {
        todoItems=[];
    }
    else{
        todoItems=JSON.parse(localStorage.getItem('todos'));
    }
    if(!todoItems.includes(textbarEl.value))
    {
        todoItems.push(textbarEl.value);
        localStorage.setItem('todos',JSON.stringify(todoItems));
    }
    else{
        alert("Zaten listede var")
    }


}
function createList()
{
    if(localStorage.getItem('todos')===null)
    {   
        todoItems=[];
        localStorage.setItem('todos',JSON.stringify(todoItems));
    }
    mainlistEl.innerHTML="";

    let getItemsInStorage=JSON.parse(localStorage.getItem('todos'));
    getItemsInStorage.forEach(element => {
        const newListItem=document.createElement("li");
        newListItem.textContent=element;
        newListItem.addEventListener("click",()=>
        {
            textbarEl.value=newListItem.textContent;
        })
        mainlistEl.insertBefore(newListItem, mainlistEl.firstChild);
    });
}

createList();

//const todoItems=[];
addBtnEl.addEventListener("click", () =>
{
    addToStorage()
    createList()

} )

deleteBtnEl.addEventListener("click", () =>
{
    let getItemsInStorage=JSON.parse(localStorage.getItem('todos'))
    getItemsInStorage.forEach((item,index)=>
    {
        if(item === textbarEl.value)
        {
            getItemsInStorage.splice(index,1);
        }
    })
    localStorage.setItem('todos',JSON.stringify(getItemsInStorage));
    createList();
} )

updateBtnEl.addEventListener("click", () =>
    {
        let getItemsInStorage=JSON.parse(localStorage.getItem('todos'))
        getItemsInStorage.forEach((item,index)=>
        {
            if(item === textbarEl.value)
            {
                getItemsInStorage.splice(index,1);
            }
        })
        localStorage.setItem('todos',JSON.stringify(getItemsInStorage));
        createList();
    } )
    

clearBtnEl.addEventListener("click", () =>
{
    mainlistEl.innerHTML="";
    localStorage.clear();
    getlocalList();

} )