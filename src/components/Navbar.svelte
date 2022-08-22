<script>
  import Formular from "./Formular.svelte";

  let form;
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

<div class="box">
  <div class="container">
    <button on:click={() => form.formularAnzeigen()} class="button">Neu</button>
  </div>
</div>

<Formular bind:this={form} />
