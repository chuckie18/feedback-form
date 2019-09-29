$(document).ready(function () {

  $("#phone").mask("+7 (999) 999-9999");

  $('#error-name').hide();
  $('#error-phone').hide();
  $('#error-comment').hide();

  var error_name = false;

  $('#name').focusout(function () {
    check_name();
  });

  $('#phone').focusout(function () {
    check_phone();
  });

  $('#text').focusout(function () {
    check_text();
  });
  
  function check_name() {
    var name = $("#name").val();
    if (name !== '') {
      $('#error-name').hide();
      $('#name').css("border", "0.5px solid gray");
    }
    else {
      $('#error-name').show();
      $('#name').css("border", "2px solid #F90A0A");
    }
  }

  function check_phone() {
    var phone = $("#phone").val();
    if (phone !== '') {
      $('#error-phone').hide();
      $('#phone').css("border", "0.5px solid gray");
    }
    else {
      $('#error-phone').show();
      $('#phone').css("border", "2px solid #F90A0A");
    }
  }

  function check_text() {
    var text = $('#text').val();
    if (text !== '') {
      $('#error-comment').hide();
      $('#text').css("border", "0.5px solid gray");
    }
    else {
      $('#error-comment').show();
      $('#text').css("border", "2px solid #F90A0A")
    }
  }

  $('#success').hide();
  $('#success').bind('click', function(){
    $('#gray').hide();
    $('#success').hide();
  });

  $('#open').click(function () {
      $('#form111').toggle();
      $('#gray').toggle();
    });

  $('#clear').bind("click", function () {
      $("input[name='name']").val(''); 
      $("input[name='phone']").val(''); 
      $("input[name='text']").val(''); 
    });

    
    $('#close').click(function () {
      $('#form111').hide();
      
      $('#gray').toggle();
    });

    $('#gray').bind("click", function() {
      $('#form111').hide();
      $('#success').hide();
      $('#gray').hide();
    });

    $('#send').bind("click", function () {
      $.ajax ({//функция $ метод  ajax. Выполняет все функции технологии ajax. в этом метоже выполняется отправка, получение данных и тд
          url: 'database.php', //на какую страницу, отправляем данные
          type: 'POST', //тип запроса
          data: ({'name': $("#name").val(),'phone': $("#phone").val(), 'text': $("#text").val() }), //передаем данные, переменные
          dataType: 'html',//тип передаваемых данных. Другой html, можно писать теги
          success: function (data) {
            
              if(data == "WIN") {
                 $('#form111').toggle();
                $("input[name='name']").val(''); 
                $("input[name='phone']").val(''); 
                $("input[name='text']").val(''); 
                $('#success').show();
                $('#alert').text("Запись успешно добавлена!"); 
              }
              else  alert("Ошибка");
          } //вызывается тогда, когда функция успешно обработала данные и пришел ответ
    });  
});


});