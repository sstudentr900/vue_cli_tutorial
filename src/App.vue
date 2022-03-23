<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/store">store</router-link> |
        <router-link to="/prop">prop</router-link> |
        <router-link to="/emit">emit</router-link> |
        <router-link to="/routquery">routquery</router-link> |
        <router-link to="/scrollToTop">scrollToTop</router-link> |
        <router-link to="/model">model</router-link> |
        <router-link to="/i18n">i18n</router-link>
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    position: fixed;
    background: #fff;
    width: 100%;
    top: 0;
}
nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
nav+div{
    margin-top: 100px;
}
</style>
