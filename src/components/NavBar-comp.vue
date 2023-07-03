<template>
<nav class="navbar fixed-top">
<div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://i.postimg.cc/G3DYFgzN/Black-and-White-Monochrome-Tech-Logo.png" class="logo" alt="logo"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigate My Page</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
    <div class="offcanvas-body">
    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                See More:
            </a>
            <ul class="dropdown-menu border-0">
                <li><a class="dropdown-item" href="#">Testimonials</a></li>
                <li><a class="dropdown-item" href="#">Projects</a></li>
                <li><a class="dropdown-item" href="#">Contact Form</a></li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
</div>
</nav>
</template>
<script>
</script>
<style>

</style>