document.addEventListener("DOMContentLoaded", () => {
  const btnCliente = document.getElementById("btnCliente");
  const btnAdmin = document.getElementById("btnAdmin");

  if (btnCliente) {
    btnCliente.addEventListener("click", () => {
      window.location.href = "login_cliente.html";
    });
  }

  if (btnAdmin) {
    btnAdmin.addEventListener("click", () => {
      window.location.href = "login_admin.html";
    });
  }
});
