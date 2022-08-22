<script>
  import Formular from "./Formular.svelte";
</script>

<section class="hero is-primary welcome is-small">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Dashboard</h1>
      <h2 class="subtitle">
        <slot><!-- optional fallback --></slot>
      </h2>
    </div>
  </div>
</section>

<Formular />
