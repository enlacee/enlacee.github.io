<template>
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header page-scroll">
              <button type="button" class="navbar-toggle"
                @click="openMenuMobile()">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <h1 class="h1-header">
                  <a class="navbar-brand" href="#top" @click.prevent="$utils.goTop(0)">Anibal Copitan</a>
              </h1>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="navbar-collapse" :class="{collapse: toggleNav}">
              <ul class="nav navbar-nav navbar-right">
                  <li class="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li>
                    <a href="#blog" @click="scrollTo('blog', $event)"><i class="fas fa-code"></i>Blog</a>
                  </li>
              </ul>
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
  </nav>
</template>
<script>
export default {
  data() {
    return {
      toggleNav: true,
    }
  },
  methods: {
    openMenuMobile() {
      this.toggleNav = !this.toggleNav;
    },
    scrollTo(idEl, event) {

      if (event) {
        event.preventDefault();
      }

      // window.location.href = "" + idEl;
      window.location.href = "#" + idEl; // remove this Rewrite URL for Remove anchor default position
      this.$utils.goToSection(idEl);
    }
  }
}
</script>
