// Aguarda o documento HTML ser completamente carregado antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona todos os botões que acionam as abas (Empresa e Estudante).
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    
    // Seleciona todos os conteúdos (os dois formulários de login).
    const tabContents = document.querySelectorAll('.tab-content');

    // Adiciona um "ouvinte" de clique para cada botão de aba.
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            
            // --- LÓGICA DE ABAS PADRÃO ---

            // 1. Remove a classe 'active' de TODOS os botões para limpá-los.
            tabTriggers.forEach(t => t.classList.remove('active'));
            
            // 2. Adiciona a classe 'active' APENAS no botão que foi clicado (para dar o destaque vermelho).
            trigger.classList.add('active');

            // 3. Pega o valor do atributo 'data-tab' do botão clicado (ex: "company" ou "student").
            const targetTabId = trigger.getAttribute('data-tab');
            
            // 4. Esconde TODOS os formulários, removendo a classe 'active' deles.
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // 5. Mostra APENAS o formulário correspondente ao botão clicado.
            // O ID do formulário é encontrado usando o 'data-tab' (ex: "student" -> "student-form").
            const targetContent = document.getElementById(`${targetTabId}-form`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

