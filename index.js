function iniciar () {
  inicio_titulo = localStorage.getItem('title');
  inicio_nota = localStorage.getItem('nota');
  inicio_data = localStorage.getItem('data');


  if ((inicio_titulo == "") && (inicio_nota == "")) {
    document.getElementById('title').innerText = "Título";

    document.getElementById('texto').innerText = "Anotação…";
    document.getElementById('date'). value = "dd/mm/yyyy";
  } else {

    document.getElementById('title').innerText = inicio_titulo;

    document.getElementById('texto').innerText = inicio_nota;

    document.getElementById('date'). value = inicio_data;
  }


  if ((inicio_titulo == "") && (inicio_nota != "")) {
    document.getElementById('title').innerText = "Título";
  } else if ((inicio_nota == "") && (inicio_titulo != "")) {
    document.getElementById('texto').innerText = "Anotação…";
  }
}

function editar() {
  document.getElementById('titulo').innerText = "Edição";

}

function voltar(){
  window.location.href="index.html";
}

function mudar() {
  document.getElementById('titulo').innerText = "Bloco De Nota";

  novo_titulo = document.getElementById('novo_titulo').value;

  novo_texto = document.getElementById('novo_texto').value;


  document.getElementById('title'). innerText = novo_titulo;

  document.getElementById('texto').innerText = novo_texto;

  localStorage.setItem('title', novo_titulo);
  localStorage.setItem('nota', novo_texto);


  var a = new Date();
  data = a.getDate();
  mes = a.getMonth()+1;
  ano = a.getFullYear();

  localStorage.setItem('data', data+'/'+mes+'/'+ano);

  if ((novo_titulo != "") || (novo_texto != "")) {
    document.getElementById('date'). value = data+"/"+mes+"/"+ano;
  } else {
    document.getElementById('date'). value = "dd/mm/yyyy";
  }

  if ((novo_titulo == "") && (novo_texto == "")) {
    document.getElementById('title').innerText = "Título";

    document.getElementById('texto').innerText = "Anotação…";
    document.getElementById('date'). value = "dd/mm/yyyy";
  }
  if ((novo_titulo == "") && (novo_texto != "")) {
    document.getElementById('title').innerText = "Título";
  } else if ((novo_texto == "") && (novo_titulo != "")) {
    document.getElementById('texto').innerText = "Anotação…";
  }
}