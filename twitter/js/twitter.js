'use strict';
const url = 'https://neto-api.herokuapp.com/twitter/jsonp?jsonp=addInfo'
addScript(url);

function addScript(url) {
  return new Promise((done, fail) => {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  });
};

function addInfo(userInfo) {
  const wallpaper = document.querySelector('.bio img'),
        username = document.querySelector('.bio h3'),
        description = document.querySelector('.bio p'),
        avatar = document.querySelector('.avatarcontainer img'),
        content = document.querySelectorAll('.content output');
  
  wallpaper.src = userInfo.wallpaper;
  username.innerHTML = userInfo.username;
  description.innerHTML = userInfo.description;
  avatar.src = userInfo.pic;
  content[0].innerHTML = userInfo.tweets;
  content[1].innerHTML = userInfo.followers;
  content[2].innerHTML = userInfo.following;
};