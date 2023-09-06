const dados = {
      "artigos": [
        {
          "titulo": "A Importância das Árvores na Biodiversidade",
          "autor": "Priscila Áquila",
          "data_publicacao": "12 de agosto de 2023",
          "conteudo": "As árvores desempenham um papel fundamental na preservação da biodiversidade...",
          "url": "Artigos/artigo1.html" // URL do artigo 1
        },
        {
          "titulo": "A Evolução das Espécies",
          "autor": "Priscila Áquila",
          "data_publicacao": "25 de agosto de 2023",
          "conteudo": "A teoria da evolução de Charles Darwin revolucionou nossa compreensão da vida na Terra...",
          "url": "artigo2.html" // URL do artigo 2
        }
      ]
    };

    // Função para criar elementos HTML com base nos dados do JSON
    function criarArtigos() {
      const containerArtigos = document.getElementById('artigos');

      dados.artigos.forEach(artigo => {
        const artigoElement = document.createElement('section');
        artigoElement.classList.add('post');

        const tituloElement = document.createElement('h2');
        const linkArtigo = document.createElement('a');
        linkArtigo.textContent = artigo.titulo;
        linkArtigo.href = artigo.url;
        tituloElement.appendChild(linkArtigo);

        const autorElement = document.createElement('p');
        autorElement.textContent = `Autor: ${artigo.autor}`;

        const dataElement = document.createElement('p');
        dataElement.textContent = `Data de Publicação: ${artigo.data_publicacao}`;

        const conteudoElement = document.createElement('p');
        conteudoElement.textContent = artigo.conteudo;

        artigoElement.appendChild(tituloElement);
        artigoElement.appendChild(autorElement);
        artigoElement.appendChild(dataElement);
        artigoElement.appendChild(conteudoElement);

        containerArtigos.appendChild(artigoElement);
      });
    }

    // Chame a função para criar os artigos quando a página carregar
    window.onload = criarArtigos;