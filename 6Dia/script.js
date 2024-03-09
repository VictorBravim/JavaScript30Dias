// Defina a URL para a API do GitHub
const API_URL = 'https://api.github.com/users/';

// Obtenha referências aos elementos HTML
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Função que recupera os dados do usuário da API
async function getUser(username) {
    try {
        // Realiza uma chamada assíncrona à API usando axios
        const { data } = await axios(API_URL + username);
        
        // Chama a função para criar o card de usuário com os dados obtidos
        createUserCard(data);
        
        // Obtém e exibe os repositórios do usuário
        getRepos(username);
    } catch (err) {
        // Se o usuário não for encontrado, cria um card de erro
        if (err.response.status == 404) {
            createErrorCard('Usuário não encontrado');
        }
    }
}

// Função que cria um card com informações do usuário
function createUserCard(user) {
    main.innerHTML = `
    <div class="card">
      <div class="load-anim"><img class="avatar" src="${user.avatar_url}" alt="${user.name}" /></div>
      <div class="user-info">
        <h2 class="load-anim load-anim-text">${user.name}</h2>
        <p class="load-anim load-anim-text">${user.bio}</p>
        <ul>
          <li class="load-anim load-anim-text">${user.followers} <strong>Seguidores</strong></li>
          <li class="load-anim load-anim-text">${user.following} <strong>Seguindo</strong></li>
          <li class="load-anim load-anim-text">${user.public_repos} <strong>Repositórios</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>`;
}

// Função que cria um card de erro
function createErrorCard(message) {
    main.innerHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>
  `;
}

// Função que recupera dados dos repositórios do usuário da API
async function getRepos(username) {
    try {
        // Realiza uma chamada assíncrona à API para obter os repositórios
        const { data } = await axios(API_URL + username + '/repos?sort=created');
        
        // Adiciona os repositórios ao card do usuário
        addReposToCard(data);
    } catch (err) {
        // Em caso de erro, cria um card de erro
        createErrorCard('Problema ao buscar repositórios');
    }
}

// Função que adiciona os repositórios do usuário ao card
function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    // Exibe os cinco primeiros repositórios do usuário
    repos.slice(0, 5).forEach((repo) => {
        const repoLink = document.createElement('a');
        repoLink.classList.add('repo', 'load-anim', 'load-anim-text');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.innerHTML = repo.name;

        // Adiciona o link do repositório ao elemento HTML
        reposEl.appendChild(repoLink);
    });
}

// Adiciona um ouvinte de eventos para quando o formulário for enviado
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    // Se um nome de usuário foi inserido, recupera os dados do usuário e limpa o campo de pesquisa
    if (user) {
        getUser(user);
        search.value = '';
    }
});
