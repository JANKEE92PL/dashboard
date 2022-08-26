<script>
  import "../node_modules/bulma/css/bulma.min.css";
  import Navbar from "./components/Navbar.svelte";
  import Liste from "./components/Liste.svelte";
  import { aufgaben } from "./storage/stores";
  import Router from "svelte-spa-router";
  import Tabelle from "./components/Tabelle.svelte";
  import ListeAPI from "./storage/ListeAPI";
  import { onMount } from "svelte";
  import Kachel from "./components/Kachel.svelte";

  onMount(async () => {
      $aufgaben = await ListeAPI.laden();
  });

  $: aufgabenAnzahl = $aufgaben.length;
  $: aufgabenAnzahlErledigt = $aufgaben.filter(
    (aufgabe) => aufgabe.erledigt
  ).length;
</script>

<svelte:head
  ><title>Dashboard: {aufgabenAnzahlErledigt}/{aufgabenAnzahl}</title
  ></svelte:head
>
<Navbar>To-do-Liste: {aufgabenAnzahlErledigt}/{aufgabenAnzahl}</Navbar>

<Router
  routes={{
    "/": Liste,
    "/tabelle": Tabelle,
    "/kachel": Kachel,
  }}
/>

<style>
  /* your styles go here */
</style>
