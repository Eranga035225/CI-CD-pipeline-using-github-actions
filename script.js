let total = 0;

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;

  if (name === "" || amount === "") {
    alert("Please enter expense name and amount");
    return;
  }

  const expenseList = document.getElementById("expenseList");

  const li = document.createElement("li");
  li.innerHTML = `<span>${name}</span><span>Rs. ${amount}</span>`;
  expenseList.appendChild(li);

  total += parseFloat(amount);
  document.getElementById("total").innerText = total;

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}
