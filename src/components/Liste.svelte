<script>
    import {aufgaben} from "../storage/stores";
    import ListeAPI from "../storage/ListeAPI";
    import {blur, slide, fly, scale} from "svelte/transition";
    import {expoOut} from "svelte/easing";


    const bearbeiten = (id) => {
        ListeAPI.speichern($aufgaben);
    };

    const loeschen = (id) => {
        const ok = confirm("Soll die Aufgabe wirklich gelöscht werden?");

        if (ok) {
            $aufgaben = $aufgaben.filter((aufgabe) => aufgabe.id != id);
            ListeAPI.speichern($aufgaben);
        }
    };
</script>

<div class="container">
    <div class="columns is-multiline">
        {#each $aufgaben as aufgabe (aufgabe)}
            <div class="column is-one-third">
                <div
                        class="card"
                        in:fly={{ y: -150, duration: 1000, delay: 500 }}
                        out:fly={{ y: 500, duration: 500, easing: expoOut }}
                >
                    <header class="card-header">
                        <button
                                class="delete is-small"
                                on:click={() => loeschen(aufgabe.id)}>Löschen
                        </button
                        >
                        <p class="card-header-title level">
                            {aufgabe.titel}
                            <input
                                    type="checkbox"
                                    on:blur={() => bearbeiten(aufgabe.id)}
                                    bind:checked={aufgabe.erledigt}
                            />
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
              <textarea
                      class="textarea"
                      rows="3"
                      on:blur={() => bearbeiten(aufgabe.id)}
                      bind:value={aufgabe.inhalt}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        {:else}
            <h1 in:blur="{{amount: 50, delay: 400}}" class="title is-4 mt-4">Keine Aufgaben vorhanden, Lege deine erste Aufgabe an.</h1>
        {/each}
    </div>
</div>

<style>
    .card:focus-within {
        background-color: #ffecba;
        transition: background-color 1s;
    }
</style>