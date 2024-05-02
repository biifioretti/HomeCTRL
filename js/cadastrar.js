document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao-cadastrar').addEventListener('click', function() {
      var nomeDispositivo = document.getElementById('nome').value.trim();
      var descricao = document.getElementById('descricao').value;
      var ambiente = document.getElementById('ambiente').value;
      var tipoConexao = document.getElementById('tipo-conexao').value;
  
      var nomeErro = document.getElementById('nome-erro');
      var descricaoErro = document.getElementById('descricao-erro');
      var ambienteErro = document.getElementById('ambiente-erro');
      var tipoConexaoErro = document.getElementById('tipo-conexao-erro');
  
      // Limpa mensagens de erro anteriores
      nomeErro.textContent = '';
      descricaoErro.textContent = '';
      ambienteErro.textContent = '';
      tipoConexaoErro.textContent = '';
  
      // Validar nome do dispositivo
      if (nomeDispositivo === '') {
        nomeErro.textContent = 'Por favor, informe o nome do dispositivo.';
        return;
      }
  
      // Validar descrição
      if (descricao.length < 10) {
        descricaoErro.textContent = 'A descrição deve ter no mínimo 10 caracteres.';
        return;
      }
  
      // Validar ambiente
      if (ambiente === '') {
        ambienteErro.textContent = 'Por favor, selecione o ambiente.';
        return;
      }
  
      // Validar tipo de conexão
      if (tipoConexao === '') {
        tipoConexaoErro.textContent = 'Por favor, selecione o tipo de conexão.';
        return;
      }
  
      // Se todas as validações passarem, enviar o formulário
      document.querySelector('form').submit();
    });
});
