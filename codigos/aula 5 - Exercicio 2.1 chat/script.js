// Array para armazenar os dados dos empregados
let employees = [];

document.getElementById("employeeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const pieces = parseInt(document.getElementById("pieces").value);

  // Validações
  if (!name || pieces <= 0) {
    alert("Por favor, insira um nome válido e um número de peças maior que zero.");
    return;
  }

  // Calcular o salário
  const salary = calculateSalary(pieces);

  // Adicionar empregado ao array
  employees.push({ name, salary });

  // Atualizar o relatório
  updateReport();

  // Limpar o formulário
  document.getElementById("employeeForm").reset();
});

// Função para calcular o salário com base no número de peças
function calculateSalary(pieces) {
  if (pieces <= 200) {
    return pieces * 2.00;
  } else if (pieces <= 400) {
    return pieces * 2.30;
  } else {
    return pieces * 2.50;
  }
}

// Função para atualizar o relatório
function updateReport() {
  const employeeList = document.getElementById("employeeList");
  employeeList.innerHTML = "";

  let totalSalary = 0;

  employees.forEach(employee => {
    totalSalary += employee.salary;
    const li = document.createElement("li");
    li.textContent = `${employee.name.padEnd(32)} R$ ${employee.salary.toFixed(2)}`;
    employeeList.appendChild(li);
  });

  // Atualizar total de salários
  document.getElementById("totalSalary").textContent = totalSalary.toFixed(2);

  // Atualizar média de salários
  const averageSalary = totalSalary / employees.length;
  document.getElementById("averageSalary").textContent = averageSalary.toFixed(2);
}
