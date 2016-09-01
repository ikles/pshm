<?php
$recepient = "membship@ya.ru@ya.ru";
$sitename = "Название сайта";
$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$phone = trim($_POST["phone"]);
$mess = trim($_POST["mess"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $mail \nСообщение: $mess";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");