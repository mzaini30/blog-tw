<script setup="">
import data from "../../tiddlers/published.json";
import { gambar as gambarDefault } from "../data/default";
import { stripHtml } from "string-strip-html";
</script>

<template>
  <Head>
    <title>Zen</title>
  </Head>
  <div class="bg-zinc-200 min-h-screen">
    <div class="max-w-250 pb-3 mx-auto gap-3 grid grid-cols-4">
      <div class="col-span-1">
        <div>Zen</div>
      </div>
      <div class="col-span-2">
        <div class="font-bold my-2">Headline</div>
        <template v-for="(x, n) in data">
          <a
            v-if="n == 0"
            :href="`/${x.slug}`"
            class="rounded shadow flex bg-white gap-2"
          >
            <img
              class="gambar w-[50%] object-cover flex-grow-0 flex-shrink-0"
              :src="x.cover_image || gambarDefault"
              :alt="x.title"
            />
            <div class="p-2">
              <div class="font-bold pb-2">{{ x.title }}</div>
              <div>{{ stripHtml(x.excerpt).result }}</div>
            </div>
          </a></template
        >
        <div class="font-bold my-2">Tulisan Terbaru</div>
        <div class="grid grid-cols-2 gap-3">
          <template v-for="(x, n) in data">
            <a
              v-if="n > 0 && n < 5"
              class="rounded shadow overflow-hidden bg-white"
              :href="`/${x.slug}`"
            >
              <img
                :src="x.cover_image || gambarDefault"
                class="w-full gambar-list-tulisan"
                :alt="x.title"
              />
              <div class="p-2 text-sm">{{ x.title }}</div>
            </a></template
          >
        </div>
      </div>
      <div class="col-span-1"></div>
    </div>
  </div>
</template>

<style scoped="">
.gambar {
  aspect-ratio: 1 / 1;
}
.gambar-list-tulisan {
  aspect-ratio: 9 / 6;
}
</style>
