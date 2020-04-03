<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
  html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding:0;
    color:#333;
    font-size: 14px;
  }
  ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;
  }
  /* 一键全站变灰 */
  html {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(1);
}
</style>
