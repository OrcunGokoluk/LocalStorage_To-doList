

const  addBtn= document.getElementById("add-btn");
const clearBtn=document.getElementById("clear-btn");
const container= document.getElementById("container");
const textBox=document.getElementById("textbox");

let list;

function addToLocale()
{
    if(localStorage.getItem("myvalue")===null)
    {
        list=[];
        list.push(textBox.value);
    }
    else{
       list=JSON.parse(localStorage.getItem("myvalue"));
       list.push(textBox.value);
    }

    localStorage.setItem("myvalue",JSON.stringify(list))
    
}

function createList()
{   
    container.innerHTML="";
    let localSt=JSON.parse(localStorage.getItem("myvalue"))
    localSt.forEach(element => {
        const newParagraph=document.createElement("p");
        newParagraph.textContent=element;
        container.append(newParagraph);
    });

}

createList();

addBtn.addEventListener("click",()=>
{
    addToLocale();
    createList();
    console.log(list);

})

clearBtn.addEventListener("click", ()=>
{
    container.innerHTML="";
    localStorage.clear();
})