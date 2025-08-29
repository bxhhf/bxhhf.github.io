// 确保#web_bg元素存在
let webBg = document.querySelector('#web_bg');
if (!webBg) {
    webBg = document.createElement('div');
    webBg.id = 'web_bg';
    document.body.appendChild(webBg);
}

// 获取banner的背景图片
const banner = document.querySelector('.banner');
if (banner) {
    // 提取背景图片URL
    const bgImage = banner.style.backgroundImage ||
        getComputedStyle(banner).backgroundImage;

    // 设置全屏背景
    webBg.setAttribute('style', `
    background-image: ${bgImage};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-size: cover;
    background-position: center;
  `);

    // 清除banner原背景
    banner.style.backgroundImage = 'none';

    // 处理蒙版
    const mask = document.querySelector("#banner .mask");
    if (mask) {
        mask.style.backgroundColor = 'rgba(0,0,0,0)';
    }
} else {
    console.warn('未找到.banner元素，无法设置背景');
}
