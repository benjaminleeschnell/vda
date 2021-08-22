function quantity(amount){
    var select = document.querySelectorAll('quant');
    [].forEach.call(select, function(el) {
        for (var i = 101; i > amount; i--){
            el.options[select.options.length] = new Option(i-1, i);
          }
    })
}