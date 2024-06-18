document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('produtoForm');
    const resultadoCadastro = document.getElementById('resultadoCadastro');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Captura dos valores dos campos
      const nomeProduto = document.getElementById('nomeProduto').value;
      const valorProduto = document.getElementById('valorProduto').value;
      const codigoBarras = document.getElementById('codigoBarras').value;
  
      // Simulação de cadastro (substitua com sua lógica real de cadastro)
      const produto = {
        nome: nomeProduto,
        valor: valorProduto,
        codigoBarras: codigoBarras
      };
  
      // Exibe resultado na tela (simulação de exibição)
      resultadoCadastro.innerHTML = `
        <p>Produto cadastrado com sucesso!</p>
        <p>Nome: ${produto.nome}</p>
        <p>Valor: R$ ${produto.valor}</p>
        <p>Código de Barras: ${produto.codigoBarras}</p>
      `;
  
      // Limpa o formulário após o cadastro (opcional)
      form.reset();
    });
  });
  