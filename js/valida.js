function validaCamposCadastroPergunta(){
	if(document.cadastro_pergunta.titulo.value=="")
	 {
	     alert("O preenchimento do campo Titulo é obrigatório!");
	     return false;
	 } else if(document.cadastro_pergunta.alternativa_a.value=="")
	 {
	     alert("O preenchimento do campo Alternativa A é obrigatório!");
	     return false;
	 } else if(document.cadastro_pergunta.alternativa_b.value=="")
	 {
	     alert("O preenchimento do campo Alternativa B é obrigatório!");
	     return false;
	 } else if(document.cadastro_pergunta.alternativa_c.value=="")
	 {
	     alert("O preenchimento do campo Alternativa C é obrigatório!");
	     return false;
	 } else if(document.cadastro_pergunta.alternativa_d.value=="")
	 {
	     alert("O preenchimento do campo Alternativa D é obrigatório!");
	     return false;
	 } else if(document.cadastro_pergunta.alternativa_correta.value=="")
	 {
	     alert("O preenchimento do campo Alternativa Correta é obrigatório!");
	     return false;
	 } else
		return true;
}

function validarCamposCadastroAdministrador(){
	if(document.cadastro_administrador.nome.value=="")
	 {
	     alert("O Campo: Nome é obrigatório!");
	     return false;
	 } else if(document.cadastro_administrador.senha.value=="")
	 {
	     alert("O Campo: Senha é obrigatório!");
	     return false;
	 } else if(document.cadastro_administrador.senha.value != document.cadastro_administrador.confirmar_senha.value)
	 {
	     alert("Confirmação da Senha está Incorreta!");
	     return false;
	 } else
		return true;
}

function validarCamposCadastroUsuario(){
	if(document.cadastro_usuario.nome.value=="")
	 {
	     alert("O Campo: Nome é obrigatório!");
	     return false;
	 } else if(document.cadastro_usuario.senha.value=="")
	 {
	     alert("O Campo: Senha é obrigatório!");
	     return false;
	 } else if(document.cadastro_usuario.senha.value != document.cadastro_usuario.confirmar_senha.value)
	 {
	     alert("Confirmação da Senha está Incorreta!");
	     return false;
	 } else
		return true;
}