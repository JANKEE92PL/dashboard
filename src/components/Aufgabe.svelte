<script>
    import {createEventDispatcher} from "svelte"

    export let id, titel, inhalt, erledigt;
    let dispatch = createEventDispatcher()

    function update() {
        dispatch("update", {id, titel, inhalt, erledigt})
    }
</script>

<div class="aufgabe" class:erledigt>
    <h1 class="text-input">{titel}: {inhalt}</h1>
    <input type="checkbox" class="checkbox-erledigt" bind:checked={erledigt} on:change={()=>update()}>
</div>

<style>
    .aufgabe {
        display: flex;
        align-items: center;
        padding: 5px;
    }

    .aufgabe.erledigt {
        background-color: lightgreen;
        text-decoration: line-through;
        transition: background-color 2s;
    }

    .text-input {
        flex-grow: 1;
        font-size: 1em;
    }

    .checkbox-erledigt {
        margin-left: 50px;
    }
</style>