class Book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = genre;
    }
}
class Display {
    add(book) {
        let tablebody = document.getElementById("tablebody");
        let bstring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.genre}</td>
                      </tr>`;
        tablebody.innerHTML+=bstring;
    }
    clear(){
        let libraryform=document.getElementById("libraryform");
        libraryform.reset();
    }
    validate(book){
        if(book.name.length<2 || book.author.length<2)
        {
            return false;
        }
        else 
        {
            return true;
        }
    }
    show(type,displaymsg) {
        let msg=document.getElementById("message");
        let btext;
        if(type==='success')
        {
            btext='Success';
        }
        else
        {
            btext='Error!';
        }
        msg.innerHTML=`</nav> <br><div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${btext}:</strong> ${displaymsg}
        <button type="button" class="btn-close text-zinc-900" data-bs-dismiss="alert" aria-label="Close">X</button>
      </div>`;
      setTimeout(function(){
        msg.innerHTML=''
      },4000);
    }
}

let libraryform=document.getElementById("libraryform");
libraryform.addEventListener("submit",libraryformsubmit);

function libraryformsubmit(e){
    let name=document.getElementById("bookname").value;
    let author=document.getElementById("author").value;
    let genre;
    let fiction=document.getElementById("fiction");
    let scifi=document.getElementById("sci-fi");
    let selfhelp=document.getElementById("self-help");
    let love=document.getElementById("love");

    if(fiction.checked){
        genre=fiction.value;
    }
    else if(scifi.checked){
        genre=scifi.value;
    }
    else if(selfhelp.checked){
        genre=selfhelp.value;
    }
    else if(love.checked){
        genre=love.value;
    }
    let book=new Book(name,author,genre);
    console.log(book);
    let display=new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show("success","Your book has been successfully added");
    }
    else {
        display.show("danger","Sorry, invalid entry");
    }
    e.preventDefault();
}