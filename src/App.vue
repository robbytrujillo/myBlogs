<template>
  <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="index.html"><span style="color: darkolivegreen">robby</span>blogs.</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto py-4 py-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link px-lg-3 py-3 py-lg-4">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/blogs" class="nav-link px-lg-3 py-3 py-lg-4">Blogs</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link px-lg-3 py-3 py-lg-4">About</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />

  <!-- Footer -->
  <footer class="border-top">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a target="_blank" href="https://www.instagram.com/robbyilhkus/">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a target="_blank" href="https://github.com/robbytrujillo">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <div class="small text-center text-muted fst-italic">Copyright &copy; Robby Ilhkus 2023</div>
        </div>
      </div>
    </div>
  </footer>
</template>
