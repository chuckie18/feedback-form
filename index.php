<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Форма обратной связи</title>
  <link rel="stylesheet" href="style/style.css">
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.js"></script>
  <script src="js/jquery.maskedinput.min.js"></script>
</head>
<body>
<div class="gray" id="gray" ></div>
<input type="button" value="Обратная связь" id="open">
<div class="feedback-form"  id="form111" >
  <form  id="form" action="">
    <div class="close">
      <img src="img/close.png" height="48px" width="48px" id="close"/> 
    </div>
    <div class="input">
      <div class="input-label">
        <p class="label">Ваше имя*</p>
      </div>

      <div class="input-text">
        <input class="input-text-field" type="text" name="name" id="name" >
      </div>
      <span class="input-error" id="error-name">Это обязательное поле</span>

      <div class="input-label">
        <p class="label">Ваш номер телефона*</p>
      </div>

      <div class="input-text">
        <input class="input-text-field" type="text" name="phone" id="phone" >
      </div>

      <span class="input-error" id="error-phone">Это обязательное поле</span>

      <div class="input-label">
        <p class="label">Комментарий к заявке</p>
      </div>    

      <div class="input-text">
        <input class="input-text-field" type="text" name="text" id="text" >
      </div>

      <span class="input-error" id="error-comment">Введите комментарий</span>

      </form>
    <div class="button-container">
      <div class="button">
        <div class="submit">
        <input class="clear-btn" type="button" value="ОЧИСТИТЬ" id="clear">
        </div>
      </div>
      <div class="button">
        <div class="submit">
            <input class="sub" type="button" value="ОТПРАВИТЬ" id="send">
        </div>
      </div>
    </div>
    <p id="notice" style="display:none">Заполните все поля</p>
  </div>
</div>
  <div  class="alert" id="success" >
    <p id="alert"></p>
    <center><p><input type="button" value="Закрыть" id="exit"></p></center>
</div>
</div>



</body>
</html>