/*
  <head>
    <title>Mikey</title>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Asap&family=PT+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="favicon.ico">
  </head>

  <body class="darkTheme">
    <!-- Main Content -->
    <ul class="main-nav">
        <li class="push"><a href="#">Home</a></li> &nbsp; &nbsp; &nbsp; &nbsp;
        <li><a href="pages/youtube.html">YouTube</a></li> &nbsp; &nbsp; &nbsp; &nbsp;
        
        <!-- Theme Switch 
        <label class="switch">
          <input id='theme' type="checkbox">
          <span class="slider round"></span>
        </label> -->
    </ul>

    <div class="container">
      <div class="container__image">
        <img id="mikey-foto" src="./images/me.png">
      </div>
      <div class="container__feature">
        <h1 id="name"></h1>
        <p id="time"></p>
      </div>
    </div>
  
    <div id="transition-fadey">
    
      <div id="main-contain">
       <h3>About</h3>
       <p id='body-text'></p>

       <h3>Projects</h3>
       <div class="grids">
        <div id="gridOne">
          <a href="https://github.com/shpoopdy/TwitterBot" target="_blank">
            <h2 class="projects">TwitterBot</h2>
          </a>
            <p id='project-text-one'></p>
        </div>
        <div id="gridTwo">
          <a href="https://github.com/shpoopdy/Gambala" target="_blank">
            <h2 class="projects">Gambala</h2>
          </a>
          <p id='project-text-two'></p>
        </div>
        <div id="gridThree">
          <a href='https://github.com/shpoopdy/Towered' target="_blank">
            <h2 class="projects">Towered</h2>
          </a>
          <p id='project-text-three'></p>
        </div>
        <div id="gridFour">
          <a href='https://github.com/shpoopdy/Hackathon2023' target="_blank">
            <h2 class="projects">Cipher Site</h2>
          </a>
          <p id='project-text-four'></p>
        </div>
       </div>
 
     </div>
    </div>
    <footer class="socialMediaBlock">
      <a href="https://www.instagram.com/shpoopdy" target="_blank"><img src="./images/insta.png"></img></a>
      <a href="https://www.youtube.com/channel/UCaRbyJwt7N2RtOB7tWPPN3w" target="_blank"><img src="./images/tubes.png"></img></a>
      <a href="https://www.twitter.com/shpoopdy" target="_blank"><img src="./images/twitter.png"></img></a>
    </footer>
    <script src="./js/index.js"></script>
  </body>
</html>
*/

import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mikey</title>
      </Head>
      <Layout />
    </div>
  )
}
