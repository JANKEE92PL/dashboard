import { writable } from "svelte/store";

export const aufgaben = writable([
  {
    id: 1,
    titel: "svelte",
    inhalt: "lerne stores",
    erledigt: false,
  },
  {
    id: 2,
    titel: "svelte",
    inhalt: "lerne navbar",
    erledigt: true,
  },
  {
    id: 1,
    titel: "joggen",
    inhalt: "5 Km",
    erledigt: true,
  },
]);
