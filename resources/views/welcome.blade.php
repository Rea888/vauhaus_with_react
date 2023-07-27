<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Vauhouse</title>
    <meta content="kutyakozmetika" name="description">
    <meta content="kutya, kutyakozmetika, nyírás, vágás, szőrápolás, bio, vegán, olcsó, közelben" name="keywords">

    <link rel="icon" type="image/x-icon" href="{{asset ('paw2.png') }}" />
    <link rel="sytlesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQJQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+1" crossorigin="anonymus"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">


   


    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
<div id="app"></div>
</body>
</html>
