<script>
  import { aufgaben } from "../storage/stores";
</script>

<div class="container">
  <div class="columns is-multiline">
    {#each $aufgaben as aufgabe (aufgabe)}
      <div class="column is-one-third">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {aufgabe.titel}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {aufgabe.inhalt}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
