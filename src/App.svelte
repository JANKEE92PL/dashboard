<script>
  import "../node_modules/bulma/css/bulma.min.css";
  import Navbar from "./components/Navbar.svelte";
  let anzahl = 5;
</script>

<svelte:head><title>Dashboard: {anzahl -1}/{anzahl}</title></svelte:head>
<Navbar>To-do-Liste: {anzahl -1}/{anzahl}</Navbar>

<style>
  /* your styles go here */
</style>
