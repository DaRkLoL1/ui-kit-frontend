export default class Like {
  constructor(like, index) {
    this.$like = $(like);
    this.index = index;
    this.createLike();
  }

  createLike() {
    this.$icon = this.$like.find('.like-button__icon');
    this.$number = this.$like.find('.like-button__number');
    this.addHandleClick();
  }

  addHandleClick() {
    this.$like.on(`click.likeButton${this.index}`, this.handleLikeButtonClick.bind(this));
  }

  handleLikeButtonClick(event) {
    const $target = $(event.currentTarget);
    let text = Number.parseInt(this.$number.text(), 10);
    if (!($target.hasClass('like-button_clicked'))) {
      $target.addClass('like-button_clicked');
      text += 1;
      this.$number.text(text);

      if (text > 9) {
        this.$number.addClass('like-button__number_margin_null');
      }
      this.$icon.text('favorite');
    } else {
      $target.removeClass('like-button_clicked');
      text -= 1;
      this.$number.text(text);

      if (text < 10) {
        this.$number.removeClass('like-button__number_margin_null');
      }

      this.$icon.text('favorite_border');
    }
  }
}
