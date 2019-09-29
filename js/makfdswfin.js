$(document).ready(function() {
       

  $('#btn').click(function () {
    $('#form111').toggle();
  });

  $('#close').click(function () {
    $('#form111').hide();
  });

   $("#phone").mask("+7 (999) 999-9999");

  $('#clear').bind("click", function () {
    $("input[name='name']").val(''); 
    $("input[name='phone']").val(''); 
    $("input[name='text']").val(''); 
  });

  $('#111').validate({
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

  // $('#send').bind("click", function () {//bind("действие", "функция, которая выполняется при этом действии")
  //         $.ajax ({//функция $ метод  ajax. Выполняет все функции технологии ajax. в этом метоже выполняется отправка, получение данных и тд
  //             url: "database.php", //на какую страницу, отправляем данные
  //             type: "POST", //тип запроса
  //             data: ({name: $("#n").val(), phone: $("#phone").val(), text: $("#text").val()}), //передаем данные, переменные
  //             dataType: "html",//тип передаваемых данных. Другой html, можно писать теги
  //             success: function (data) {
  //                 if(data == "fail") {
  //                   alert("Занято");
  //                   // $("div").text("Ошибка");
  //                 }
  //                 else  alert('Запись успешно добавлена');
  //             } //вызывается тогда, когда функция успешно обработала данные и пришел ответ
  //       }); 
  //     });//обработчик событий, отсле
  
  
    
});