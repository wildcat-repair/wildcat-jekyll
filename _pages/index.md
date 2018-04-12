---
permalink: /
layout: index
title: Gottlieb Group Consulting
---
<header class="container-brand container-vignette fixed ">
<a id="top"></a>
  <div class="grid-container">
    <div class="grid-x grid-margin-x align-middle section-block-primary">
      <div class="cell small-12 text-center">
      	{% include components/logo-large.html %}
        <div class="div text-center show-for-large">
          <a href="#intro" class="icon-next" title="Take a Giant Step" data-smooth-scroll="data-smooth-scroll" data-offset="-40" data-animation-easing="swing">
        	{% svg "/assets/img/icon-arrow-down.svg" class="arrow pulse icon-xlarge svg-color--white"  preserveAspectRatio="xMidYMid meet" %}
          </a>
        </div>  
      </div>
    </div>
  </div>
</header>

<nav class="section-nav show-for-medium" data-sticky-container="data-sticky-container">
  <ul class="menu container-brand drop align-center transition" data-sticky="data-sticky" data-options="marginTop:0;" data-top-anchor="intro">
    <li>
      <a class="nav-item nav-logo" href="/" title="main">{% svg "/assets/img/ggc-logo-small.svg" class="svg-color--white show-for-large logo-nav"  preserveAspectRatio="xMidYMid meet" %}</a>
    </li>
  	{% for item in site.data.nav-main %}
      <li data-smooth-scroll="data-smooth-scroll" data-offset="50" data-animation-easing="swing"><a class="nav-item" href="#{{ item.url }}" title="{{ item.title }}">{{ item.title }}</a></li>
    {% endfor %}
    <li>
      <a class="nav-item" href="/inspire" title="Inspire">Inspire</a>
    </li>
  </ul>
</nav>
<div class="container-white">
<section class="section-pad" id="intro">
  <div class="grid-container">
    <div class="grid-x grid-margin-x align-center">
      <div class="cell small-12 medium-3 large-3 text-right-on-medium">
        <h3 class="headline-2 text-light">Take <span class="text-bold">Giant Steps</span> in Impact and Influence</h3>
      </div>
      <div class="cell small-12 medium-9 large-6">
        <p>Gottlieb Group develops and improves ideas and strategies to advance market opportunities and to better community initiatives. We develop positions, concepts, relationships and projects that impact decision-making and identity. And we help clients take giant steps in their market, industry and community influence through outcome focused creative and anticipatory approaches. Simply put, we always look to find a better way.</p>
      </div>
    </div>
  </div>
</section>
<aside id="services" class="grid-container">
  <div class="grid-x align-center">
    <div class="cell small-12 medium-10 large-8 xlarge-6 text-center">
      <img src="/assets/img/ggc-art-rings.svg" class="" alt="Industry + Innovation | Science + Research | Civi + Public"/>
    </div>  
  </div>
</aside>
<section class="section-pad">
  <div class="grid-container">
    <div class="grid-x grid-margin-x align-center">
      <div class="cell small-12 medium-3 large-3 text-right-on-medium">
        <h2 class="headline-4">Services</h2>
      </div>
      <div class="cell small-12 medium-9 large-6">
        <p>To help clients make impactful decisions, and reinforce or advance their identity, Gottlieb Group Communications utilizes techniques from <strong>corporate communications, content creation, film production, management consulting, research, and public affairs.</strong> The firm is also brought into special situations.</p>
      </div>
    </div>
  </div>
</section>
<section class="section-pad" id="bio">
  <div class="grid-container">
    <div class="grid-x grid-margin-x align-center">
      <div class="cell small-12 medium-3 large-3 text-right-on-medium">
        <h3 class="headline-4">Biography</h3>
      </div>
      <div class="cell small-12 medium-9 large-6">
        <aside class="person-vertical float-right">
          <img class="avatar avatar-large float-right" src="/assets/img/steven-gottlieb-portrait-2018-tighter-crop.jpg" alt="Steven Gottlieb">
          <h3 class="person-label">Steven Gottlieb</h3>
        </aside>
        <p>Over the course of his career, <strong>Steven has worked with a broad and diverse set of organizations</strong> from Fortune 100 companies to founders of emerging technologies companies; scientists working in the fields of materials science, energy storage, and vaccines; financiers of innovation and real estate; top administrators of health care systems and university presidents; artists and athletes; elected officials and government institutions; and global aid and health professionals.</p>
        <p>Earlier in his career, he held various positions at the Anti-Defamation League, in Denver and San Diego, where he oversaw regional civil rights initiatives and managed public opinion on a variety of First Amendment issues.</p>
        <p>Gottlieb received Highest Honors from the University of California, Santa Cruz, earning a Bachelor of Arts in Modern Society and Social Thought. His paper about the American Press during the Holocaust resides at the United States Holocaust Museum and Archives in Washington DC.</p>
        <p><strong>Competition has always played an important part in his life:</strong> Steven is a two-time NCAA All-American and 1989 NCAA tennis champion. And he provides pro bono counsel to the International Tennis Hall of Fame in Newport, Rhode Island.</p>
        <hr class="divider-body">
        <p><strong>Two central components of Gottlieb’s life are business and sports &mdash; he works with an aggressive and enthusiastic spirit.</strong> And listening to jazz is something he enjoys doing in his free time. Jazz is also an important connective tissue for how he marries business focus and athletic roots. In business and sports there is an improvisational necessity that occurs within set and agreed upon boundaries. He uses “Giant Steps” in his company’s tagliine (“Take Giant Steps In Impact and Influence”) for a reason. <em>Giant Steps</em> was recorded by John Coltrane in 1959 and stands out as a standard because of Coltrane’s mission to present a unified sound.</p>
      </div>
    </div>
  </div>
</section>
<section class="section-pad" id="step">
  <div class="grid-container">
    <div class="grid-x grid-margin-x align-center">
      <div class="cell small-12 medium-3 large-3 text-right-on-medium">
        <h3 class="text-callout">Take a Giant Step</h3>
      </div>
      <div class="cell small-12 medium-9 large-6">
        <p class="text-sans text-larger group">It’s what Gottlieb Group Communications does: bring all the available resources together to develop impact opportunities so clients can take Giant Steps. It’s always about finding a better way.</p>
        <p>
          <a href="#contact" class="icon-next" title="Take a Giant Step" data-smooth-scroll="data-smooth-scroll" data-offset="" data-animation-easing="swing">
            {% svg "/assets/img/icon-arrow-down.svg" class="arrow pulse icon-large svg-color--brand" %}
          </a>
        </p>
      </div>
    </div>
  </div>
</section>
