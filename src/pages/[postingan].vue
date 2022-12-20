<script>
import data from "../../tiddlers/published.json";
export default definePageComponent({
  getStaticPaths() {
    return data.map((artikel) => ({
      params: { postingan: artikel.slug },
      props: { artikel },
    }));
  },
});
</script>

<script setup="">
defineProps(["artikel"]);
</script>

<template>
  <div class="bg-white isi-postingan rounded shadow p-5 mt-3">
    <h1 class="mb-2 font-bold text-center">{{ artikel.title }}</h1>
    <div v-html="artikel.text.replaceAll('/#', '/')" class="grid gap-3"></div>
  </div>
</template>

<style>
.isi-postingan a {
  @apply underline;
}
</style>
