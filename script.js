const addBook = document.querySelector(".add-book");
const bookDetails = document.querySelector(".book-details")

addBook.addEventListener("click", function(e)
{
   if(bookDetails.style.display==="none")
   {
    bookDetails.style.display="flex"
   }else
   {
    bookDetails.style.display="none"
   }
})

const mylibrary = [];
function book(title,author,pages,status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addbooktolibrary()
{   
    let title=document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pagesNo").value;
    let status = document.getElementById("checkStatus");
    if(status.checked===true)
    {
        status = "READ THE BOOK"
    }else
    {
        status = "DIDN'T READ THE BOOK"
    }
    let newbook = new book(title,author,pages,status)
    mylibrary.push(newbook)
    bookDetails.reset ();
    
  
}

const submit = document.querySelector(".submit")
const card = document.querySelector(".card")



submit.addEventListener("click", function(e)
{
    e.preventDefault()
    addbooktolibrary();
    card.innerHTML=""
    for(let i=0;i<=mylibrary.length;i++)
    {
        
        let cardcontent = document.createElement("div")
        cardcontent.classList.add("content")
        let remove = document.createElement("button")
        remove.classList.add("removeel")
        remove.style.display="block"
        remove.innerHTML="REMOVE"
        cardcontent.innerHTML= "BOOK NAME : "+mylibrary[i].title+"<br>"+ "AUTHOR : "+mylibrary[i].author+"<br>"+ "NO OF PAGES : "+mylibrary[i].pages+"<br>" +"STATUS : "+mylibrary[i].status
        card.appendChild(cardcontent)  
        cardcontent.appendChild(remove) 
        remove.addEventListener("click", function(e)
        {
            removebook(i)
        })
          
    }
     
    
})


function removebook(index)
{
    mylibrary.splice(index,1)
    card.innerHTML=""
    for(let i=0;i<=mylibrary.length;i++)
    {
        
        let cardcontent = document.createElement("div")
        cardcontent.classList.add("content")
        let remove = document.createElement("button")
        remove.classList.add("removeel")
        remove.style.display="block"
        remove.innerHTML="REMOVE"
        cardcontent.innerHTML= "BOOK NAME : "+mylibrary[i].title+"<br>"+ "AUTHOR : "+mylibrary[i].author+"<br>"+ "NO OF PAGES : "+mylibrary[i].pages+"<br>" +"STATUS : "+mylibrary[i].status
        card.appendChild(cardcontent)  
        cardcontent.appendChild(remove) 
        remove.addEventListener("click", function(e)
        {
            removebook(i)
        })
          
    }
     
    
}