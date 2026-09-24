// Lógica de manipulação do painel do NRAgenda

document.addEventListener('DOMContentLoaded', () => {
    console.log("NRAgenda Inicializado com Sucesso!");
    // Aqui você pode inicializar ouvintes de eventos para modais de formulário
});

// Função genérica para exibir notificações rápidas na tela (Toast)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-6 right-6 z-50 px-6 py-3 rounded-2xl text-white text-sm font-semibold shadow-xl transition-all duration-300 transform translate-y-0 ${
        type === 'success' ? 'bg-emerald-600' : 'bg-red-600'
    }`;
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Exemplo de função para capturar cadastro de novo cliente via interface
function handleNovoCliente(event) {
    event.preventDefault();
    const nome = document.getElementById('clienteNome').value;
    const telefone = document.getElementById('clienteTelefone').value;

    if(!nome || !telefone) {
        showNotification('Preencha todos os campos!', 'error');
        return;
    }

    // Simulação de salvamento bem-sucedido (Integrado ao Firestore posteriormente)
    showNotification(`Cliente ${nome} cadastrado com sucesso!`);
    event.target.reset();
}
