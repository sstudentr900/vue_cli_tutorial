<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/create">create</router-link>
        <router-link to="/von">von</router-link>
        <router-link to="/vif">vif</router-link>
        <router-link to="/for">for</router-link>
        <router-link to="/components">components</router-link>
        <router-link to="/vuex">vuex</router-link>
        <router-link to="/lifecycle">lifecycle</router-link>
        <router-link to="/watch">watch</router-link>
        <router-link to="/prop">prop</router-link>
        <router-link to="/emit">emit</router-link>
        <router-link to="/routquery">rout</router-link>
        <router-link to="/axios">axios</router-link>
        <router-link to="/scrollToTop">scrollToTop</router-link>
        <router-link to="/model">model</router-link>
        <router-link to="/image">image</router-link>
        <router-link to="/lodash">lodash</router-link>
        <router-link to="/mockjs">mockjs</router-link>
        <router-link to="/transition">transition</router-link>
        <router-link to="/slide">slide</router-link>
        <router-link to="/slide2">slide2</router-link>
        <router-link to="/slide3">slide3</router-link>
        <router-link to="/swiper">swiper</router-link>
        <router-link to="/i18n">i18n</router-link>
        <router-link to="/music">music</router-link>
        <router-link to="/shopping">shopping</router-link>
    </nav>
    <main>
        <router-view class="container" />
    </main>
</template>

<style>
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
}

nav {
    padding: 30px 0;
    background: #fff;
    width: 220px;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid #ddd;
}
nav>a {
    padding: 6px 24px 6px 32px;
    color: #2c3e50;
    display: block;
    text-decoration: none;
}

nav>a.router-link-exact-active {
    color: #42b983;
}
nav+main{
    min-height: 100vh;
    width: 100%;
    margin-left: 220px;
}
.container{
    margin: 0 auto;
    width: 720px;
    padding: 0 24px 64px;
}
pre {
    margin-bottom: 26px;
    padding: 16px 0 0 0;
    font-size: 15px;
    color: #c4c4c4;
    background-color: #232323;
    border: none;
    border-radius: 4px;
    /* white-space: pre-line; */
}
pre code{
    display: block;
    overflow-x: auto;
    padding: 0.5em;
}
h2{
    margin-top: 2.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.3rem;
    line-height: 1.25;
    font-size: 1.65rem;
}
img.max{
    width: 100%;
    max-width: 700px;
    height: auto;
}
</style>
