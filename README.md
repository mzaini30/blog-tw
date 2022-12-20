# Blog Rasa Wiki

## Fitur

- [x] Edit dalam bentuk website Wiki (`pnpm wiki`)
- [x] Hasil build berupa website statis tanpa JavaScript (`pnpm build`)
- [x] Auto deploy dengan Github Actions
- [ ] Styling tipografi belum selesai
- [x] Membuka Wiki secara acak (mode wiki)
- [x] Favorit Wiki (mode wiki)
- [x] Memperbaiki link yang berubah (mode wiki)

## Instalasi

```bash
pnpm i
```

## Mengubah URL Blog

Di `./iles.config`

```diff
import { defineConfig } from "iles";
import WindiCSS from "vite-plugin-windicss";

export default defineConfig({
  svelte: true,
+  siteUrl: "https://blogzen.js.org",
  vite: {
    optimizeDeps: {
      include: ["svelte"],
    },
    plugins: [WindiCSS()],
  },
});
```

## Mengubah Metadata Default

Di `./src/data/default.js`

## Menambahkan Foto Cover

Pas mengedit postingan di Wiki, di bagian `Add a new field:` isi dengan `cover_image`. Lalu, di bagian `field value`, isi dengan URL gambarnya.
