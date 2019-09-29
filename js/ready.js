$(document).ready(function () {

  $('#success').hide();
  $('#success').bind('click', function(){
    $('#success').hide();
  });

  $('#open').click(function () {
      $('#form111').toggle();
    });

  $('#clear').bind("click", function () {
      $("input[name='name']").val(''); 
      $("input[name='phone']").val(''); 
      $("input[name='text']").val(''); 
    });

    
    $('#close').click(function () {
      $('#form111').hide();
    });

    $('#send').bind("click", function () {
      $.ajax ({//функция $ метод  ajax. Выполняет все функции технологии ajax. в этом метоже выполняется отправка, получение данных и тд
          url: 'database.php', //на какую страницу, отправляем данные
          type: 'POST', //тип запроса
          data: ({'name': $("#name").val(),'phone': $("#phone").val(), 'text': $("#text").val() }), //передаем данные, переменные
          dataType: 'html',//тип передаваемых данных. Другой html, можно писать теги
          success: function (data) {
            
              if(data == "WIN") {
                 $('#form').hide();
                $('#success').show();
                $('p').text("Запись успешно добавлена!"); 
              }
              else  alert("Ошибка");
          } //вызывается тогда, когда функция успешно обработала данные и пришел ответ
    });  
});

$("#phone").mask("+7 (999) 999-9999");
$('#form').validate({
      rules: {
        name: 'required',
        phone: 'required',
        text: {
          required: true,
          // email: true,
        }
      },
      messages: {
        name: 'Это обязательное поле',
        phone: 'Это обязательное поле',
        text: 'Это обязательное поле',
      },
      submitHandler: function(form) {
        form.submit();
      }
    });  
});