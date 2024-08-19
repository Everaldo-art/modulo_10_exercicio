$(document).ready(function() {
    // Inicializa o slider
    $('#carousel-imagens').slick({
        autoplay: true
    });

    // Alterna a visibilidade do menu
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    // Aplica a máscara ao campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Configuração de validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: { // Certifique-se de que este nome corresponde ao campo no HTML
                required: false
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Anima o scroll para a seção de contato ao clicar em um botão
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo );
        
        // Anima o scroll até o destino
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
