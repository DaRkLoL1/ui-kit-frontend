import Like from './like-button';

const likes = document.querySelectorAll('.js-like-button');
likes.forEach((like, index) => {
  new Like(like, index);
});
