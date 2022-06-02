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
    const doneBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    doneBtn.innerHTML = "✔️";
    delBtn.innerHTML = "❌";
    newLi.appendChild(doneBtn);
    newLi.appendChild(delBtn);
    ul.appendChild(newLi);
    delBtn.addEventListener("click", () => newLi.remove());
    doneBtn.addEventListener("click", () => newLi.classList.add("done"));
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

document.querySelector("form").addEventListener("submit", addMe);
