<script>
  import "../node_modules/bulma/css/bulma.min.css";
  import Navbar from "./components/Navbar.svelte";
  import Liste from "./components/Liste.svelte";
  import { aufgaben } from "./storage/stores";

  $: aufgabenAnzahl = $aufgaben.length;
  $: aufgabenAnzahlErledigt = $aufgaben.filter(aufgabe => aufgabe.erledigt).length;
</script>

<svelte:head><title>Dashboard: {aufgabenAnzahlErledigt - 1}/{aufgabenAnzahl}</title></svelte:head>
<Navbar>To-do-Liste: {aufgabenAnzahlErledigt - 1}/{aufgabenAnzahl}</Navbar>



<Liste/>



<style>
  /* your styles go here */
</style>
