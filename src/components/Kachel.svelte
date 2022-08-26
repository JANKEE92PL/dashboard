<script>
    import {aufgaben} from "../storage/stores";
    let src = "https://picsum.photos/640/480";
</script>

<style>
    .tile:not(.is-ancestor) {
        user-select: none;
    }

    .is-dragging {
        transform: rotate(25deg);
        cursor: move;
    }
</style>


<div class="box">

    {#each $aufgaben as aufgabe (aufgabe)}
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                            <p class="title">{aufgabe.titel}</p>
                            <p class="subtitle">{aufgabe.inhalt}</p>
                        </article>
                        <article class="tile is-child notification is-warning">
                            <p class="title">{aufgabe.titel}</p>
                            <p class="subtitle">{aufgabe.inhalt}</p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                            <p class="title">{aufgabe.titel}</p>
                            <p class="subtitle">{aufgabe.inhalt}</p>
                            <figure class="image is-4by3">
                                <img src={src}/>
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-danger">
                        <p class="title">{aufgabe.titel}</p>
                        <p class="subtitle">{aufgabe.inhalt}</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">{aufgabe.titel}</p>
                        <p class="subtitle">{aufgabe.inhalt}</p>
                        <div class="content">
                            <!-- Content -->
                        </div>
                    </div>
                </article>
            </div>
        </div>
    {/each}

</div>
