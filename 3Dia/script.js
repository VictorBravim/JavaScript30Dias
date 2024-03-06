// Seleciona todos os elementos de input com a classe 'controls'
const inputs = [].slice.call(document.querySelectorAll('.controls input'));

// Adiciona ouvintes de eventos para mudança e movimento do mouse em cada input
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// Função chamada quando ocorre uma mudança ou movimento do mouse em um input
function handleUpdate(e) {
    // Determina o sufixo para a propriedade CSS com base no ID do input
    const suffix = (this.id === 'base' ? '' : 'px');
    
    // Atualiza a propriedade CSS correspondente no elemento raiz do documento
    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}
