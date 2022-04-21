function iniciar () {
  inicio_titulo = localStorage.getItem('title');
  inicio_nota = localStorage.getItem('nota');
  inicio_data = localStorage.getItem('data');
  
  if(((localStorage.getItem('name')) && (localStorage.getItem('name'))){
}else{
document.getElementById('title').innerHTML = "Título";
document.getElementById('texto').innerHTML = "Anotação..........";
}


  if ((inicio_titulo == "") && (inicio_nota == "")) {
    document.getElementById('date'). value = "dd/mm/yyyy";
  } else {

    document.getElementById('title').innerHTML = inicio_titulo;

    document.getElementById('texto').innerHTML = inicio_nota;

    document.getElementById('date'). value = inicio_data;
  }


  if ((inicio_titulo == "") && (inicio_nota != "")) {
    document.getElementById('title').innerHTML = "Título";
  } else if ((inicio_nota == "") && (inicio_titulo != "")){
    document.getElementById('texto').innerHTML = "Anotação..........";
  }
}

function editar() {
  document.getElementById('titulo').innerHTML = "Edição";

}


function mudar() {
  document.getElementById('titulo').innerHTML = "Bloco De Nota";

  novo_titulo = document.getElementById('novo_titulo').value;

  novo_texto = document.getElementById('novo_texto').value;


  document.getElementById('title'). innerHTML = novo_titulo;

  document.getElementById('texto').innerHTML = novo_texto;

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
    document.getElementById('title').innerHTML = "Título";

    document.getElementById('texto').innerHTML = "Anotação..........";
    document.getElementById('date'). value = "dd/mm/yyyy";
  }
  if ((novo_titulo == "") && (novo_texto != "")) {
    document.getElementById('title').innerHTML = "Título";
  } else if ((novo_texto == "") && (novo_titulo != "")){
    document.getElementById('texto').innerHTML = "Anotação..........";
  }
}
