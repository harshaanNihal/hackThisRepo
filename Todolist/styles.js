const formElt = document.querySelector(".form");
const itemList = document.querySelector(".ul");
const complt = document.querySelector(".complt");
const active = document.querySelector(".active");
const all = document.querySelector(".all");
const items = JSON.parse(localStorage.getItem("items")) || []; // if already exists get from storage otherwise create empty array

function addItem(e) {
  e.preventDefault();
  console.log("inside submit");

  const value = this.querySelector("[name=item]").value;
  if (value === null || value.match(/^ *$/) !== null) {
    alert("Add item!");
    //return;
  } else {
    const item = {
      id: Date.now() + Math.floor(Math.random() * 10),
      text: value,
      done: false,
    };
    items.push(item);
    populateList(items, itemList);

    localStorage.setItem("items", JSON.stringify(items)); //converting array to JSON string
    if (items.length) {
      document.querySelector(".buttons").style.display = "inline";
    }
  }

  this.reset(); // for resetting the input field
  // console.log("items", items);
}
function populateList(items = [], itemList) {
  itemList.innerHTML = items
    .map((item, i) => {
      return `
      <li>
      <div class="listItem">
      <input type = "checkbox" data-id =${item.id} value =${item.text}  ${
        item.done ? "checked" : ""
      }/>
      <label  data-id =${item.id} data-index =${i} for "item${i}">${
        item.text
      }</label>
      <button  data-id =${item.id} value =${item.text} >❌</button>
      </div>
      </li>
      `;
    })
    .join("");
}

function toggleButton(e) {
  if (e.target.matches("input[type=checkbox]")) {
    // skip this unless its an input
    const el = e.target;
    console.log("inside toggle button checkbox");
    Index = items.findIndex((obj) => obj.id == el.dataset.id);
    items[Index].done = !items[Index].done; //whenever checkbox is clicked done property is changed of item.
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemList);
  } else if (e.target.matches("button")) {
    console.log("inside toggle button delete");
    const el = e.target;
    Index = items.findIndex((obj) => obj.id == el.dataset.id);
    items.splice(Index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    if (items.length == 0) {
      document.querySelector(".buttons").style.display = "none";
    }
    populateList(items, itemList);
  }
}
function EditButton(e) {
  if (e.target.matches("label")) {
    populateList(items, itemList);
    const el = e.target;
    Index = items.findIndex((obj) => obj.id == el.dataset.id);
    value1 = el.innerHTML;
    const li = this.children[Index];

    li.classList.add("editing");
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("edit");
    input.value = value1;
    li.appendChild(input);

    input.select();
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        console.log("inside  enter event");
        let value2 = input.value;
        items[Index].text = value2;
        li.removeChild(input);
        li.classList.remove("editing");
        localStorage.setItem("items", JSON.stringify(items));
        populateList(items, itemList);
      }
    });
  }
}
function checked() {
  console.log("inside complted");
  const filtered = items.filter((item) => {
    if (item.done) {
      console.log("text", item);
      return true;
    }
  });
  console.log("tex", filtered);
  populateList(filtered, itemList);
}
function unChecked() {
  console.log("inside unchecked");

  const filtered = items.filter((item) => {
    if (!item.done) {
      return true;
    }
  });
  populateList(filtered, itemList);
}
function All() {
  console.log("inside All");
  const filtered = items.forEach((element) => {
    console.log(items);
  });

  populateList(items, itemList);
}
complt.addEventListener("click", checked);
active.addEventListener("click", unChecked);
all.addEventListener("click", All);

formElt.addEventListener("submit", addItem);
itemList.addEventListener("click", toggleButton);
itemList.addEventListener("dblclick", EditButton);
populateList(items, itemList); //populate on load
if (items.length) {
  document.querySelector(".buttons").style.display = "inline";
  console.log("on load", items);
}
