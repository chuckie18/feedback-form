<?

 // print_r($_POST);
  define ('DB_HOST', 'localhost');
  define ('DB_USER', 'root');
  define ('DB_PASSWORD', '');
  define ('DB_NAME', 'feedback');

  $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    if ($mysqli->connect_errno) exit ('Ошибка соединения с бд');

    if (isset($_POST['name']) && ($_POST['name']) != null && isset($_POST['phone']) && ($_POST['phone']) != null && isset($_POST['text']) && ($_POST['text']) != null ) {
        $name = $mysqli->real_escape_string(htmlspecialchars($_POST['name']));
        $phone = $mysqli->real_escape_string(htmlspecialchars($_POST['phone']));
        $text = $mysqli->real_escape_string(htmlspecialchars($_POST['text']));
        $query = "INSERT INTO `comments` 
        (`id`, `name`, `phone`, `comment`) 
        VALUES (NULL, '$name', '$phone', '$text');";
        $result = $mysqli->query($query);
          if ($result) echo "WIN";
      }

?>