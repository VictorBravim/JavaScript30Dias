// Seleção de elementos DOM
var $keyboardWrapper = $('.virtual-keyboard'),
    $key = $keyboardWrapper.find("input"),
    $key_delete = $('.delete'),
    $key_shift = $('.shift'),
    $outputField = $('.output input'),
    $currentValue = $outputField.val(),
    actionKeys = $(".delete,.shift")
activeShiftClass = "shift-activated";

// Função para lidar com as teclas do teclado virtual
function _keystroke(keyCase) {

    // Evento de clique nas teclas (exceto as teclas de ação)
    $key.not(actionKeys).on('click', function (e) {
        e.preventDefault();

        // Verifica se a tecla Shift está ativada
        if ($key_shift.hasClass(activeShiftClass)) {
            keyCase = 'upper';
            $key_shift.removeClass(activeShiftClass);
        } else {
            keyCase = 'lower';
        }

        // Determina o valor da tecla com base no caso (maiúsculo ou minúsculo)
        if (keyCase == 'upper') {
            var keyValue = $(this).val().toUpperCase();
        } else {
            var keyValue = $(this).val().toLowerCase();
        }

        // Obtém o valor atual do campo de saída, concatena a tecla pressionada e atualiza o campo
        var output = $('.output input').val();
        $outputField.val(output + keyValue);
        getCurrentVal();
        focusOutputField();
    });

}

// Evento de clique na tecla de exclusão
$key_delete.on('click', function (e) {
    e.preventDefault();

    // Remove o último caractere do valor atual do campo de saída
    $outputField.val($currentValue.substr(0, $currentValue.length - 1));
    getCurrentVal();
    focusOutputField();
});

// Evento de clique na tecla Shift
$key_shift.on('click', function (e) {
    e.preventDefault();

    // Alternância da classe 'shift-activated' na tecla Shift
    $(this).toggleClass(activeShiftClass);
});

// Função para obter o valor atual do campo de saída
function getCurrentVal() {
    $currentValue = $outputField.val();
}

// Função para focar no campo de saída
function focusOutputField() {
    $outputField.focus();
}

// Inicia o teclado virtual com as teclas em caixa baixa
_keystroke("lower");
