var bookName = document.getElementById("bookName");
var authorName = document.getElementById("authorName");
var description = document.getElementById("bookDesc");
var bookList = document.getElementById("booklist");
function addBook() {
  if (
    bookName.value == "" ||
    authorName.value == "" ||
    description.value == ""
  ) {
    alert("Please fill all fields");
  } else {
    var div = document.createElement("div");
    div.className = "book";

    var h3 = document.createElement("h3");
    h3.innerHTML = bookName.value;

    var p1 = document.createElement("p");
    p1.innerHTML = "Author: " + authorName.value;

    var p2 = document.createElement("p");
    p2.innerHTML = description.value;

    var btn = document.createElement("button");
    btn.innerHTML = "Delete";

    btn.onclick = function () {
      bookList.remove(div);
    };

    div.append(h3);
    div.append(p1);
    div.append(p2);
    div.append(btn);

    bookList.append(div);

    bookName.value = "";
    authorName.value = "";
    description.value = "";
  }
}
