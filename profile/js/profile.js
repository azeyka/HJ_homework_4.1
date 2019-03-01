'use strict';
const urlData = 'https://neto-api.herokuapp.com/profile/me?jsonp=addInfo';
addScript(urlData);

function addScript(url) {
  return new Promise((done, fail) => {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  });
};

function addInfo(userInfo) {
  const name = document.querySelector('.profileinfo h1'),
        position = document.querySelector('.profileinfo h3'),
        description = document.querySelector('.profileinfo p'),
        pic = document.querySelector('.firstinfo img'),
        id = userInfo.id,
        urlTechnologies = `https://neto-api.herokuapp.com/profile/${id}/technologies?jsonp=addTechnologies`;
  
  addScript(urlTechnologies);
  name.innerHTML = userInfo.name;
  position.innerHTML = userInfo.position;
  description.innerHTML = userInfo.description;
  pic.src = userInfo.pic;
};

function addTechnologies(technologies) {
  const technologiesTag = document.querySelector('.badgescard');
  technologies.forEach((technology) => {
    const techTag = `<span class="devicons devicons-${technology}"></span>`,
          contentTag = document.querySelector('.content');
    technologiesTag.innerHTML += techTag;
    contentTag.style = 'display: initial;'
  });
};