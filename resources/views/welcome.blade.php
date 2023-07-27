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
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">





    @viteReactRefresh
    @vite(['resources/css/topBanner.css', 'resources/js/app.jsx'])
</head>
<body>
<div id="app"></div>
</body>
</html>
