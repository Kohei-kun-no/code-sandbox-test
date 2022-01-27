import "./styles.css";

const onClicked = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  div.appendChild(li);

  document.getElementById("incomplete-list").appendChild(div);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);

    backButton.addEventListener("click", () => {
      deleteFromCompleteList(backButton.parentNode);

      const backTarget = backButton.parentNode;
      const backText = backTarget.firstElementChild.innerText;

      backTarget.textContent = null;

      const li = document.createElement("li");
      li.innerText = backText;

      backTarget.appendChild(li);
      backTarget.appendChild(completeButton);
      backTarget.appendChild(deleteButton);

      addToIncompleteList(backTarget);
    });
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClicked());

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

const addToIncompleteList = (target) => {
  document.getElementById("incomplete-list").appendChild(target);
};
