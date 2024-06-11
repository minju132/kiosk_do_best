<script setup>
import { useRoute } from 'vue-router';
import { useBlogStore, useSkillStore } from '@/stores/blog'
import { watchEffect, ref } from 'vue';

const route = useRoute();
const blogStore = useBlogStore();
const skillStore = useSkillStore();
const modify = ref(true);

watchEffect(() => {
    blogStore.detailsHandler(route.params.id);
});

const handler = () => {
    blogStore.modifyHandler({ id: route.params.id, ...blogStore.detailsBlog.value })
}
const deleteMethod = () => {
    blogStore.deleteHandler(route.params.id);

}
</script>

<template>
    <div class="blogContainer">
        <div class="titleContainer">
            <h1 class="title"> {{ blogStore.detailsBlog.value?.name }}</h1>
        </div>
        <div class="contentContainer">
            <div class="content">
                {{ blogStore.detailsBlog.value?.introduction }}
            </div>
            <div>
                <img class="imgBox" :src="blogStore.detailsBlog.value?.img" :alt="blogStore.detailsBlog.value?.name" />
            </div>
        </div>
        <button class="cancel-button" @click="$router.push('/')">취소</button>
    </div>
</template>

<style scoped>
.blogContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 700px;
    border: 1px solid;
    margin-left: auto;
    margin-right: auto;

}

.titleContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.title {
    width: 40%;

    text-align: center;
    border-bottom: 1px solid;
}

.contentContainer {
    text-align: center;
    width: 70%;
}

.content {

    text-align: left;
    margin-bottom: 2%;
    border: 1px;
}

textarea {
    width: 100%;
    height: 200px;
}

.imgInput {
    width: 65%;
}

.imgBox {
    width: 300px;
    height: 300px;
}

.imgContainer {
    display: flex;
    flex-direction: column;
}
</style>