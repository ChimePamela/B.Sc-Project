<template>
  <div class="dropdown tg-themedropdown tg-wishlistdropdown">
    <a
      href="javascript:void(0);"
      id="tg-wishlisst"
      class="tg-btnthemedropdown"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span class="tg-themebadge">3</span>
      <i class="icon-heart"></i>
      <span>Wishlist</span>
    </a>
    <div
      class="dropdown-menu tg-themedropdownmenu"
      aria-labelledby="tg-wishlisst"
    >
      <div class="tg-description">
        <p>No products were added to the wishlist!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserWishList",
};
</script>
