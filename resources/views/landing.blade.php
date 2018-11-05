@extends('layouts.landing')
@section('landing-header')
<header id="header" class="section">
  <div class="header-overlay"></div>
  <nav>
    <ul id="normal">
      <li class="logo">
        <a href="/home">
          <h1>Houser</h1>
        </a>
      </li>
      <li class="buttons">
        <div class="grid-buttons">
          <i id="menu" on-click="console.log(e);" class="fas fa-align-justify"></i> {{-- <a class="login" href="/login">Login</a>          --}} {{-- <select name="language" class="selectLanguage">
                    <option value="English">English</option>
                  </select> --}}
        </div>
      </li>
    </ul>
    <ul id="nav-menu">
      <li><a href="/login"><i class="fas fa-sign-in-alt"></i> Sign in</a></li>
      <li><a href="/register"><i class="fas fa-user-plus"></i> Register</a></li>
      <li><a href="#contact"><i class="fas fa-home"></i> Buy</a></li>
      <li><a href="#about">Rent</a></li>
      <li><a href="#contact">Sell</a></li>
      <li><a href="#about">Mortgages</a></li>
    </ul>
  </nav>

  <div class="front">
    <h1>Effortless to the perfect Tenant</h1>
    <h3>Find suitable tenants directly and without mass visitation.</h3>
    <a>Find Tenants Now</a>
  </div>
  <div class="benefits">
    <ul>
      <li>No Subscription</li>
      <li>No running advertisement costs</li>
      <li>Free to successful</li>
    </ul>
  </div>
</header>
@endsection

@section('pitch')
<section id="pitch" class="section">
  <div class="pitch-header">
    <h2>3 EASY STEPS</h2>
    <hr>
    <p id="first-para">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur est ullam sed nostrum quia tempora, quam quis, earum, doloremque
      sequi commodi illo quae? Itaque nihil deserunt ipsam. Ipsa culpa sequi, cum quidem laborum possimus aspernatur sapiente
  </div>

  <div class="main-pitch-card">
    <div class="left-border"></div>
    <div class="right-border"></div>
    <div class="x-border top"></div>
    <div class="cards">
      <div class="pitch-card" id="left">
        <img src="https://dummyimage.com/50x50.jpg" alt="hello" />
        <h2>Establish Criteria</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus
        </p>
      </div>
      <div class="pitch-card" id="mid">
        <img src="https://dummyimage.com/50x50.jpg" alt="hello" />
        <h2>Establish Criteria</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus
        </p>
      </div>
      <div class="pitch-card" id="right">
        <img src="https://dummyimage.com/50x50.jpg" alt="hello" />
        <h2>Establish Criteria</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident neque vitae qui autem libero, natus ut! Velit unde accusamus
        </p>
      </div>
    </div>
    <div class="x-border bottom"></div>
  </div>
</section>
@endsection

@section('benefits')
<section id="benefits" class="section">
  <h2>MORE BENEFITS</h2>
  <hr>
  <div class="benefits-grid">
    <benefit-tag titl="Time Savings" icon="fas fa-clock">hello</benefit-tag>
    <benefit-tag titl="Money Saving" icon="fas fa-wallet">description</benefit-tag>
    <benefit-tag titl="No Revenue Loss" icon="fab fa-creative-commons-nc">description</benefit-tag>
    <benefit-tag titl="Market Changes" icon="fas fa-chart-line">description</benefit-tag>
    <benefit-tag titl="Selection Process" icon="fas fa-crown">description</benefit-tag>
    <benefit-tag titl="Complete Solution" icon="fas fa-check">description</benefit-tag>
  </div>
</section>
@endsection
