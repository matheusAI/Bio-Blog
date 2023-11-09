const dados = {
      "artigos": [
        {
          id: 0,
          "titulo": "",
          "autor": "",
          "data_publicacao": "",
          "conteudo": "",
          "url": // URL do artigo 1
        },
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