'use strict';
addScript('https://neto-api.herokuapp.com/profile/me')
.then((userInfo) => {
  const name = document.querySelector('.profileinfo h1'),
        position = document.querySelector('.profileinfo h3'),
        description = document.querySelector('.profileinfo p'),
        pic = document.querySelector('.firstinfo img');

  name.innerHTML = userInfo.name;
  position.innerHTML = userInfo.position;
  description.innerHTML = userInfo.description;
  pic.src = userInfo.pic;
  return userInfo.id
})
.then((id) => {
  addScript(`https://neto-api.herokuapp.com/profile/${id}/technologies`)
  .then((technologies) => {
    const technologiesTag = document.querySelector('.badgescard');
    technologies.forEach((technology) => {
      const techTag = `<span class="devicons devicons-${technology}"></span>`,
            contentTag = document.querySelector('.content');
      technologiesTag.innerHTML += techTag;
      contentTag.style = 'display: initial;'
    });
  });
});

function addScript(url) {
  return new Promise((done, fail) => {
    window.callback = done;
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  });
};