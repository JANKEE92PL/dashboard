<script>
  import { aufgaben } from "../storage/stores";
  import ListeAPI from "../storage/ListeAPI";
  import { onMount } from "svelte";

  onMount(async () => {
    $aufgaben = await ListeAPI.laden();
  });
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
    {:else}
      <h1 class="title is-4 mt-4">Keine Aufgaben vorhanden</h1>
    {/each}
  </div>
</div>
