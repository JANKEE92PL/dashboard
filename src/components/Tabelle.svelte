<script>
    import {blur} from "svelte/transition";
    import Aufgabe from "./Aufgabe.svelte";
    import {aufgaben} from "../storage/stores.js";
    import ListeAPI from "../storage/ListeAPI.js";

    function update(e) {
        // console.log(e.detail)
        const index = $aufgaben.findIndex(aufgabe => aufgabe.id === e.detail.id)
        $aufgaben[index] = e.detail;
        ListeAPI.speichern($aufgaben)
    }
</script>

<div class="container" in:blur={{ amount: 5, delay: 400 }}>
    <div class="box">
        {#each $aufgaben as aufgabe}
            <div class="tabelle">
                <Aufgabe {...aufgabe} on:update={update}/>
            </div>
        {:else }
            <p>Alles erledigt!</p>
        {/each}
    </div>
</div>

<style>
    .tabelle {
        padding: 5px;
        border-bottom: 1px solid #eee;

    }
</style>
