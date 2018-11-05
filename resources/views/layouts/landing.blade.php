<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Laravel</title>
  <link rel="favicon" href="{{ asset('/favicon.ico') }}">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="manifest" href="/mix-manifest.json">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
    crossorigin="anonymous">
  <link rel="stylesheet" href="{{ mix('css/landing/landing.css') }}">
</head>

<body>

  <div id="slide-container">
    @yield('landing-header') @yield('pitch') @yield('benefits')
  </div>
  <div class="button-container"></div>

  <script src="{{ mix('js/app/manifest.js') }}"></script>
  <script src="{{ mix('js/app/vendor.js') }}"></script>
  <script src="{{ mix('js/landing/landing.js') }}"></script>
</body>

</html>
