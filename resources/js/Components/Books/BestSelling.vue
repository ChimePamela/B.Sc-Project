<template>
  <section class="tg-sectionspace tg-haslayout">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="tg-sectionhead">
            <h2><span>People’s Choice</span>Top Rated Books</h2>
            <a class="tg-btn" href="javascript:void(0);">View All</a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div
            id="tg-bestsellingbooksslider"
            class="tg-bestsellingbooksslider tg-bestsellingbooks owl-carousel"
          >
            <div class="item">
              <div class="tg-postbook">
                <figure class="tg-featureimg">
                  <div class="tg-bookimg">
                    <div class="tg-frontcover">
                      <img
                        src="images/books/img-01.jpg"
                        alt="image description"
                      />
                    </div>
                    <div class="tg-backcover">
                      <img
                        src="images/books/img-01.jpg"
                        alt="image description"
                      />
                    </div>
                  </div>
                  <a class="tg-btnaddtowishlist" href="javascript:void(0);">
                    <i class="icon-heart"></i>
                    <span>add to readlist</span>
                  </a>
                </figure>
                <div class="tg-postbookcontent">
                  <ul class="tg-bookscategories">
                    <li><a href="javascript:void(0);">Adventure</a></li>
                    <li><a href="javascript:void(0);">Fun</a></li>
                  </ul>
                  <div class="tg-themetagbox">
                    <span class="tg-themetag">sale</span>
                  </div>
                  <div class="tg-booktitle">
                    <h3>
                      <a href="javascript:void(0);">Help Me Find My Stomach</a>
                    </h3>
                  </div>
                  <span class="tg-bookwriter"
                    >By: <a href="javascript:void(0);">Angela Gunning</a></span
                  >
                  <span class="tg-stars"><span></span></span>
                  <span class="tg-bookprice">
                    <ins>$25.18</ins>
                    <del>$27.20</del>
                  </span>
                  <a class="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                    <i class="fa fa-book"></i>
                    <em>Review Book</em>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tg-postbook">
                <figure class="tg-featureimg">
                  <div class="tg-bookimg">
                    <div class="tg-frontcover">
                      <img
                        src="images/books/img-01.jpg"
                        alt="image description"
                      />
                    </div>
                    <div class="tg-backcover">
                      <img
                        src="images/books/img-01.jpg"
                        alt="image description"
                      />
                    </div>
                  </div>
                  <a class="tg-btnaddtowishlist" href="javascript:void(0);">
                    <i class="icon-heart"></i>
                    <span>add to wishlist</span>
                  </a>
                </figure>
                <div class="tg-postbookcontent">
                  <ul class="tg-bookscategories">
                    <li><a href="javascript:void(0);">Adventure</a></li>
                    <li><a href="javascript:void(0);">Fun</a></li>
                  </ul>
                  <div class="tg-themetagbox">
                    <span class="tg-themetag">sale</span>
                  </div>
                  <div class="tg-booktitle">
                    <h3>
                      <a href="javascript:void(0);">Help Me Find My Stomach</a>
                    </h3>
                  </div>
                  <span class="tg-bookwriter"
                    >By: <a href="javascript:void(0);">Angela Gunning</a></span
                  >
                  <span class="tg-stars"><span></span></span>
                  <span class="tg-bookprice">
                    <ins>$25.18</ins>
                    <del>$27.20</del>
                  </span>
                  <a class="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                    <i class="fa fa-book"></i>
                    <em>Review Book</em>
                  </a>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tg-postbook">
                <figure class="tg-featureimg">
                  <div class="tg-bookimg">
                    <div class="tg-frontcover">
                      <img
                        src="images/books/img-01.jpg"
                        alt="image description"
                      />
                    </div>
                    <div class="tg-backcover">
                      <img
                        src="images/books/img-01.jpg"
                        alt="image description"
                      />
                    </div>
                  </div>
                  <a class="tg-btnaddtowishlist" href="javascript:void(0);">
                    <i class="icon-heart"></i>
                    <span>add to wishlist</span>
                  </a>
                </figure>
                <div class="tg-postbookcontent">
                  <ul class="tg-bookscategories">
                    <li><a href="javascript:void(0);">Adventure</a></li>
                    <li><a href="javascript:void(0);">Fun</a></li>
                  </ul>
                  <div class="tg-themetagbox">
                    <span class="tg-themetag">sale</span>
                  </div>
                  <div class="tg-booktitle">
                    <h3>
                      <a href="javascript:void(0);">Help Me Find My Stomach</a>
                    </h3>
                  </div>
                  <span class="tg-bookwriter"
                    >By: <a href="javascript:void(0);">Angela Gunning</a></span
                  >
                  <span class="tg-stars"><span></span></span>
                  <span class="tg-bookprice">
                    <ins>$25.18</ins>
                    <del>$27.20</del>
                  </span>
                  <a class="tg-btn tg-btnstyletwo" href="javascript:void(0);">
                    <i class="fa fa-book"></i>
                    <em>Review Book</em>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'BestSelling',
    props: {
        books: {
            type: Array,
        }
    }
}
</script>
