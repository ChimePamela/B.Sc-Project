<template>
  <div class="dropdown tg-themedropdown tg-minicartdropdown">
    <div
      class="dropdown-menu tg-themedropdownmenu"
      aria-labelledby="tg-minicart"
    >
      <div class="tg-minicartbody">
        <div class="tg-minicarproduct">
          <figure>
            <img src="images/products/img-01.jpg" alt="image description" />
          </figure>
          <div class="tg-minicarproductdata">
            <h5>
              <a href="javascript:void(0);"
                >Our State Fair Is A Great Function</a
              >
            </h5>
            <h6>
              <a href="javascript:void(0);">$ 12.15</a>
            </h6>
          </div>
        </div>
        <div class="tg-minicarproduct">
          <figure>
            <img src="images/products/img-02.jpg" alt="image description" />
          </figure>
          <div class="tg-minicarproductdata">
            <h5>
              <a href="javascript:void(0);">Bring Me To Light</a>
            </h5>
            <h6>
              <a href="javascript:void(0);">$ 12.15</a>
            </h6>
          </div>
        </div>
        <div class="tg-minicarproduct">
          <figure>
            <img src="images/products/img-03.jpg" alt="image description" />
          </figure>
          <div class="tg-minicarproductdata">
            <h5>
              <a href="javascript:void(0);">Have Faith In Your Soul</a>
            </h5>
            <h6>
              <a href="javascript:void(0);">$ 12.15</a>
            </h6>
          </div>
        </div>
      </div>
      <div class="tg-minicartfoot">
        <a class="tg-btnemptycart" href="javascript:void(0);">
          <i class="fa fa-trash-o"></i>
          <span>Clear Your Cart</span>
        </a>
        <span class="tg-subtotal">Subtotal: <strong>35.78</strong></span>
        <div class="tg-btns">
          <a class="tg-btn tg-active" href="javascript:void(0);">View Cart</a>
          <a class="tg-btn" href="javascript:void(0);">Checkout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCart",
};
</script>
