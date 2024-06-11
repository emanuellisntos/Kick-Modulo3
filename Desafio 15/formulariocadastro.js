document.addEventListener('DOMContentLoaded', function() {
    $('#cep').mask('00000-000');
    
    document.querySelectorAll('.cep').forEach(function(input) {
        input.addEventListener('input', function() {
            let cep = this.value.replace(/\D/g, '');

            if (cep.length === 8) {
                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())

                    .then(data => {
                        if (!data.erro) {
                            document.getElementById('rua').value = data.logradouro;
                            document.getElementById('bairro').value = data.bairro;
                            document.getElementById('cidade').value = data.localidade;
                            document.getElementById('estado').value = data.uf;
                        } else {
                            alert('CEP não encontrado. Por favor, verifique o CEP informado.');
                            clearAddressInputs()
                        }
                    })
                    .catch(error => {
                        alert('Erro ao buscar CEP. Por favor, tente novamente.');
                        clearAddressInputs()
                    });
            }
        });
    });
});

function clearAddressInputs() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
