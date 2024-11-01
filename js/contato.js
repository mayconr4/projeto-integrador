const formulario = document.querySelector("form");
const CampoTelefone = formulario.querySelector("#telefone");

/* Ativação da máscara para Telefone */
$(CampoTelefone).mask("(00) 0000-0000");

/* Código do Formspree */
var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Obrigado! Mensagem enviada. Aguarde nosso retorno.";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! Algo de errado não está certo... tente novamente mais tarde."
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! Houve um erro... fale com o administrador pelo email <a herf=`mailto:admin@crossloop.com.br`>admin@crossloop.com.br<a/>"
    });
  }
  form.addEventListener("submit", handleSubmit)