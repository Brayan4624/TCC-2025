// Aguarda o documento HTML ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os botões que acionam as abas.
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    
    // Seleciona todos os conteúdos (formulários) das abas.
    const tabContents = document.querySelectorAll('.tab-content');

    // Adiciona um "ouvinte" de clique para cada botão de aba.
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            
            // 1. Remove a classe 'active' de todos os botões.
            tabTriggers.forEach(t => t.classList.remove('active'));
            
            // 2. Adiciona a classe 'active' apenas ao botão que foi clicado.
            trigger.classList.add('active');

            // 3. Pega o valor do atributo 'data-tab' do botão clicado (ex: "company" or "student").
            const targetTabId = trigger.getAttribute('data-tab');
            
            // 4. Esconde todos os formulários.
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // 5. Mostra apenas o formulário correspondente ao botão clicado.
            // O ID do formulário é construído a partir do data-tab (ex: "student-form").
            const targetContent = document.getElementById(`${targetTabId}-form`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
