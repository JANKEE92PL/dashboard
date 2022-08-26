<script>
    import Formular from "./Formular.svelte";
    import Router from "svelte-spa-router";
    import {location} from 'svelte-spa-router'


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
        <div class="field is-grouped">
            <button on:click={() => form.formularAnzeigen()} class="button">Neu</button>
            <div class="tabs">
                <ul>
                    <li><a href="/#/" class:has-background-grey-lighter="{$location === '/'}">Karten</a></li>
                    <li><a href="/#/tabelle" class:has-background-grey-lighter="{$location === '/tabelle'}">Tabelle</a>
                    <li><a href="/#/kachel" class:has-background-grey-lighter="{$location === '/kachel'}">Kachel</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<Formular bind:this={form}/>
