const ul = document.querySelector("ul");

const addMe = (e) => {
  e.preventDefault();
  let userData = document.querySelector("#user-info").value;
  if (!userData == "") {
    let newLi = document.createElement("li");
    let info = document.createTextNode(userData);
    newLi.appendChild(info);
    newLi.style.color = colorGen();
    ul.appendChild(newLi);
    // const doneBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    // doneBtn.innerHTML = "✔️";
    // doneBtn.innerHTML = "edit";
    // delBtn.innerHTML = "❌";
    delBtn.innerHTML = "Done & Delete";
    // newLi.appendChild(doneBtn);
    newLi.appendChild(delBtn);
    ul.appendChild(newLi);
    delBtn.addEventListener("click", () => newLi.remove());
    // doneBtn.addEventListener("click", () => newLi.classList.add("done"));
    //  doneBtn.addEventListener(`click`, () => {
    //   if (doneBtn.innerHTML.toLowerCase == "edit") {
    //    doneBtn.removeAttribute("readonly");
    //     doneBtn.focus();
    //   doneBtn.innerHTML = "Save";
    //   } else {
    //     doneBtn.setAttribute("readonly", "readonly");
    //     doneBtn.innerHTML = "Edit";
    //   }
    // });
    document.querySelector("#user-info").value = "";
  } else {
    document.querySelector("#user-info").placeholder = "What to do?";
  }
};
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  return result;
};

function theme() {
  let body = document.querySelector("body");
  let tasks = document.querySelector(".result");
  let main = document.querySelector(".main");
  let tasksbg = document.querySelector("h2");
  let mode = document.querySelector("#light-dark").checked;
  if (mode) {
    //Adding Night mode
    body.classList.add("dark");
    main.classList.add("night");
    tasks.classList.add("night");
    tasksbg.classList.add("night");

    // Adding Day normal/Default theme
    body.classList.remove("light");
    main.classList.remove("day");
    tasks.classList.remove("day");
    tasksbg.classList.remove("day");
  } else {
    body.classList.add("light");
    main.classList.add("day");
    tasks.classList.add("day");
    tasksbg.classList.add("day");

    // Removing the night mode theme
    body.classList.remove("dark");
    main.classList.remove("night");
    tasks.classList.remove("night");
    tasksbg.classList.remove("night");
  }
}

document.querySelector("form").addEventListener("submit", addMe, theme);
