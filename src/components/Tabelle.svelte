<script>
    import {blur, slide} from "svelte/transition";
    import Aufgabe from "./Aufgabe.svelte";
    import {aufgaben} from "../storage/stores.js";
    import ListeAPI from "../storage/ListeAPI.js";


    let unerledigt = $aufgaben.filter(aufgabe => aufgabe.erledigt === false).length;

    let aufgabenSortiert = [];

    $:{
        aufgabenSortiert = [...$aufgaben];
        aufgabenSortiert.sort((a, b) => (a.erledigt && b.erledigt) ? 0 : ((a.erledigt) ? 1 : -1));
    }

    function update(e) {
        // console.log(e.detail)
        const index = $aufgaben.findIndex(aufgabe => aufgabe.id === e.detail.id)
        $aufgaben[index] = e.detail;
        ListeAPI.speichern($aufgaben)
    }
</script>

<div class="container" in:blur={{ amount: 5, delay: 400 }}>
    <input type="range" bind:value={unerledigt} max={$aufgaben.length}>
    <div class="box">
        {#each aufgabenSortiert.slice(0,unerledigt) as aufgabe}
            <div transition:slide class="tabelle">
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
