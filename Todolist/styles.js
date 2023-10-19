const formElt = document.querySelector(".form");
const itemList = document.querySelector(".ul");
const complt = document.querySelector(".complt");
const active = document.querySelector(".active");
const all = document.querySelector(".all");
const items = JSON.parse(localStorage.getItem("items")) || [];

// Helper function to update local storage and populate the list
function updateAndPopulateList(items) {
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemList);
}

function addItem(e) {
  e.preventDefault();
  const value = this.querySelector("[name=item]").value.trim();
  if (!value) {
    alert("Add item!");
  } else {
    const item = {
      id: Date.now() + Math.floor(Math.random() * 10),
      text: value,
      done: false,
    };
    items.push(item);
    updateAndPopulateList(items);
    document.querySelector(".buttons").style.display = "inline";
  }
  this.reset();
}

function populateList(items = [], itemList) {
  itemList.innerHTML = items
    .map((item, i) => `
      <li>
        <div class="listItem">
          <input type="checkbox" data-id="${item.id}" value="${item.text}" ${
            item.done ? "checked" : ""
          }/>
          <label data-id="${item.id}" data-index="${i}" for="item${i}">${item.text}</label>
          <button data-id="${item.id}" value="${item.text}">❌</button>
        </div>
      </li>
    `)
    .join("");
}

function toggleButton(e) {
  const el = e.target;
  if (el.matches("input[type=checkbox]")) {
    const Index = items.findIndex((obj) => obj.id == el.dataset.id);
    items[Index].done = !items[Index].done;
    updateAndPopulateList(items);
  } else if (el.matches("button")) {
    const Index = items.findIndex((obj) => obj.id == el.dataset.id);
    items.splice(Index, 1);
    if (items.length === 0) {
      document.querySelector(".buttons").style.display = "none";
    }
    updateAndPopulateList(items);
  }
}

function editItem(e) {
  const el = e.target;
  if (el.matches("label")) {
    const Index = items.findIndex((obj) => obj.id == el.dataset.id);
    const value1 = el.textContent;
    const li = el.closest("li");

    li.classList.add("editing");
    const input = document.createElement("input");
    input.type = "text";
    input.classList.add("edit");
    input.value = value1;
    li.appendChild(input);

    input.select();
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const value2 = input.value;
        items[Index].text = value2;
        li.removeChild(input);
        li.classList.remove("editing");
        updateAndPopulateList(items);
      }
    });
  }
}

function filterItems(predicate) {
  const filtered = items.filter(predicate);
  populateList(filtered, itemList);
}

function checked() {
  filterItems((item) => item.done);
}

function unChecked() {
  filterItems((item) => !item.done);
}

function All() {
  populateList(items, itemList);
}

complt.addEventListener("click", checked);
active.addEventListener("click", unChecked);
all.addEventListener("click", All);

formElt.addEventListener("submit", addItem);
itemList.addEventListener("click", toggleButton);
itemList.addEventListener("dblclick", editItem);

populateList(items, itemList);
if (items.length) {
  document.querySelector(".buttons").style.display = "inline";
}
