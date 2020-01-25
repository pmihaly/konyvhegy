<template>
  <div class="container">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ name: 'home' }">Főoldal</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'books' }">Állományok</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'readers' }">Olvasók</b-navbar-item>
        <b-navbar-item href="#">Kölcsönzések</b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default { name: 'navbar' };
</script>

<style></style>
