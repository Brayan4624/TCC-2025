// Aguarda o documento HTML ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os botões que acionam as abas.
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    
    // Seleciona todos os conteúdos (formulários) das abas.
    const tabContents = document.querySelectorAll('.tab-content');

    // Adiciona um "ouvinte" de clique para cada botão de aba.
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            
            // Pega o valor do atributo 'data-tab' do botão clicado.
            const targetTabId = trigger.getAttribute('data-tab');

            // --- NOVA LÓGICA ---
            // Se o botão clicado for o de "company", redireciona para a página inicial.
            if (targetTabId === 'company') {
                // Isso fará a página recarregar, voltando ao estado inicial (login da empresa).
                window.location.href = 'index.html'; 
                return; // Interrompe a execução para não trocar de aba.
            }
            // --- FIM DA NOVA LÓGICA ---

            // Se não for o botão "company", a lógica de abas continua normalmente:

            // 1. Remove a classe 'active' de todos os botões.
            tabTriggers.forEach(t => t.classList.remove('active'));
            
            // 2. Adiciona a classe 'active' apenas ao botão que foi clicado.
            trigger.classList.add('active');

            // 3. Esconde todos os formulários.
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // 4. Mostra apenas o formulário correspondente ao botão clicado.
            const targetContent = document.getElementById(`${targetTabId}-form`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});
