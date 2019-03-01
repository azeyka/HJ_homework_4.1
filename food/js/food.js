'use strict';

addScript('https://neto-api.herokuapp.com/food/42', 'addInfo')
.then((data) => {
  const titleTag = document.querySelector('[data-title]'),
        picTag = document.querySelector('[data-pic]'),
        ingredients = document.querySelector('[data-ingredients]')
  
  titleTag.innerHTML = data.title;
  picTag.style = `background: url(${data.pic})`;
  ingredients.innerHTML = data.ingredients.join(', ');
})
.then(() => {
  addScript('https://neto-api.herokuapp.com/food/42/rating', 'addRating')
    .then((data) => {
      console.log(data)
      const ratingTag = document.querySelector('[data-rating]'),
            starTag = document.querySelector('[data-star]'),
            votesTag = document.querySelector('[data-votes]')
            
      
      ratingTag.innerHTML = data.rating.toFixed(2);
      starTag.style = `width: ${data.rating * 10}%`
      votesTag.innerHTML = `(${data.votes} оценок)`;
    });
})
.then(() => {
  addScript('https://neto-api.herokuapp.com/food/42/consumers', 'addConsumers')
    .then((data) => {
      const consumersTag = document.querySelector('[data-consumers]');
      data.consumers.forEach((consumer) => {
        const userTag = `<img src="${consumer.pic}" title="${consumer.name}">`
        consumersTag.innerHTML += userTag;
      });
      consumersTag.innerHTML += `<span>(+${data.total - 4})</span>`;
    });
});

function addScript(url, functionName) {
  return new Promise((done, fail) => {
    window[functionName] = done;
    const script = document.createElement('script');
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script);
  });
};