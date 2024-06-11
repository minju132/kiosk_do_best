<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const {blog} = defineProps(["blog"]);

function detailView(id) {
    router.push(`/blogs/${id}`);
}
</script>

<template>
    <div class="itemBox" @click="detailView(blog.id)">
        <div> {{ blog.name }}</div>
        <div> 가격 {{  blog.price }}</div>
        <img :src="blog.img" class="itemImage" />
        <!-- <button @click="detailView(blog.id)">조회하기</button> -->
    </div>
</template>

<style scoped>
.itemBox {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;

    /* display: flex;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    height: 30px;
    margin-bottom: 1%; */
}
.itemImage {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}

label {
    margin-left: 1%;
}

button {
    margin-right: 1%;
}
</style>