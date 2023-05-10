const boxes = document.querySelector("#boxes");
const addUserBtn = document.querySelector("#addUser");


async function iconCards() {
  const res = await fetch(" http://localhost:3000/users");
  const data = await res.json();
  data.forEach((item) => {
    const box = document.createElement("div");
    box.innerHTML =  `
    <div class = "d-flex justify-content-between" style="box-sizing: border-box;" >
  <div>
    <h4>${item.username}</h4>
    <p>${item.email}</p>
  </div>
  <div class="gap-3 d-flex align-items-center">
  <a href=""><i class="fa-solid fa-pen editBtn" onclick= editBox (${item.id}) style="color: black"></i></a>
  <a href=""><i class="fa-solid fa-trash-can" onclick= deleteBox (${item.id}) style="color: black"></i></a>
  </div>
</div>
    `;
    boxes.append(box);
  });
}
iconCards();

addUserBtn.addEventListener("click", function () {
  window.location.assign(`http://127.0.0.1:5500/addUser.html`);
});



