import { LikeButton } from './Like-button';

const likes = document.querySelectorAll('.js-like-button');
likes.forEach((like, index) => {
  new LikeButton(like, index);
});
