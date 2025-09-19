document.addEventListener("DOMContentLoaded", () => {
    // Mapa de ícones SVG
    const icons = {
        building: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>`,
        user: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
        mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
        lock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        eye: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
        eyeOff: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.749 9.749 0 0 0 5.36-1.66"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>`
    };

    // Função para inicializar ícones e funcionalidades
    const initializeForm = ( ) => {
        // Inserir ícones nos labels e botões de aba
        document.querySelectorAll("[data-icon]").forEach(element => {
            const iconName = element.dataset.icon;
            if (icons[iconName] && element.childElementCount === 0) {
                element.insertAdjacentHTML('afterbegin', icons[iconName]);
            }
        });

        // Lógica para mostrar/ocultar senha
        document.querySelectorAll(".password-toggle").forEach(toggle => {
            if (toggle.getAttribute('data-initialized')) return; // Evita adicionar múltiplos listeners

            toggle.innerHTML = icons.eye;
            toggle.addEventListener("click", () => {
                const targetId = toggle.dataset.target;
                const passwordInput = document.getElementById(targetId);
                const isPassword = passwordInput.type === "password";
                
                passwordInput.type = isPassword ? "text" : "password";
                toggle.innerHTML = isPassword ? icons.eyeOff : icons.eye;
            });
            toggle.setAttribute('data-initialized', 'true');
        });
    };

    // Lógica para troca de abas
    const tabs = document.querySelectorAll(".tab-trigger");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove a classe 'active' de todas as abas e conteúdos
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Adiciona 'active' à aba clicada e ao conteúdo correspondente
            tab.classList.add("active");
            const activeContent = document.getElementById(`${tab.dataset.tab}-form`);
            if (activeContent) {
                activeContent.classList.add("active");
            }
        });
    });

    // Lógica de submissão dos formulários
    document.querySelectorAll(".login-form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(`Cadastro enviado com sucesso!`);
            form.reset();
        });
    });

    // Inicializa tudo
    initializeForm();
});
