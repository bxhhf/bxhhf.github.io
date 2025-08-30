const navbarBrand = document.querySelector('.container a');

navbarBrand.innerHTML = `

<svg class="navbar-brand-svg" width="320" height="70" viewBox="0 0 320 70" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 定义纯黑色描边 -->
    <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#000000; stop-opacity:1" />
      <stop offset="100%" style="stop-color:#000000; stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- 文字 -->
  <text x="50%" y="50%"
        text-anchor="middle" dominant-baseline="middle"
        font-size="55"
        fill="white"
        stroke="url(#gradient-stroke)" stroke-width="4"
        stroke-dasharray="1000" stroke-dashoffset="1000"
        paint-order="stroke fill">
    B x h h f ' s b l o g
  </text>

  <style>
    /* 引入连笔草书字体 Great Vibes */
    @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

    .navbar-brand-svg text {
      font-family: 'Great Vibes', cursive;
      animation: drawText 15s ease forwards; /* 动画时长10秒 */
      font-weight: 400;
    }

    @keyframes drawText {
      to {
        stroke-dashoffset: 0;
      }
    }
  </style>
</svg>






`;

const paths = document.querySelector('.container .navbar-brand .svg .g path')

const len = paths.getTotalLength()

paths.style.setProperty('--l', len)