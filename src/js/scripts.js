$(document).ready(() => {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: "toast-top-center",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "1250",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  $("#form").on("submit", (e) => {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password").val();
    if (!email || !password) {
      toastr.error("", "Digite seu email e senha");
    } else {
      toastr.success("", "Você foi logado com sucesso");
    }
  });
});
