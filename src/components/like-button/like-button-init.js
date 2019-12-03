import Like from './like-button';

const likes = document.querySelectorAll('.js-like-button');
likes.forEach((like) => {
  new Like(like);
});
