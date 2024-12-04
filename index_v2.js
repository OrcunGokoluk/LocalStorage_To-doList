let todoItems;
//buttons

/*<button id="add_btn">ADD</button>
<button id="delete_btn">DELETE</button>
<button id="update_btn">UPDATE</button> */

const addBtnEl=document.getElementById("add_btn");
const deleteBtnEl=document.getElementById("delete_btn");
const updateBtnEl=document.getElementById("update_btn");
const clearBtnEl=document.getElementById("clear_btn");

//textbar

/* <section class="input-section">
        <input id="textEl" class="text-bar" type="text" placeholder="Write something">
    </section> */

const textbarEl = document.getElementById("textEl"); //textbarEl.value -> içindeki değeri çekmek için

//main-list

//  <section class="list-section">
//     <ul id="main-list">
//         <li>Java</li>
//     </ul>
// </section>

const mainlistEl = document.getElementById("main-list")



const getlocalList=()=>
{
    if(localStorage.getItem('todoItems')===null)
        {
            todoItems=[];
            localStorage.setItem('todoItems', JSON.stringify(todoItems));
        }
    let getTodoItems=JSON.parse(localStorage.getItem('todoItems'));

    getTodoItems.forEach(element => {
        const newlistItem = document.createElement("li");
        newlistItem.textContent=element;
        newlistItem.addEventListener("click", ()=>
        {
            textbarEl.value=newlistItem.textContent
        })
        mainlistEl.insertBefore(newlistItem, mainlistEl.firstChild);
    });
}
getlocalList();

    function createLocalStorage()
    {

            todoItems=JSON.parse(localStorage.getItem('todoItems'));


            todoItems.push(textbarEl.value);
            localStorage.setItem('todoItems', JSON.stringify(todoItems));
    }
    
//const todoItems=[];
addBtnEl.addEventListener("click", () =>
{
    createLocalStorage();
    mainlistEl.innerHTML="";
    getlocalList();
} )

clearBtnEl.addEventListener("click", () =>
    {
        localStorage.clear();
        getlocalList();
        mainlistEl.innerHTML="";
    } )