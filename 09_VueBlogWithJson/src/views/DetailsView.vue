<script setup>
import { useRoute } from 'vue-router';
import { useReMenuStore, useCoffeeStore } from '@/stores/menu'
import { watchEffect, ref } from 'vue';

const route = useRoute();
const reMenuStore = useReMenuStore();
const coffeeStore = useCoffeeStore();

watchEffect(() => {
    reMenuStore.detailsHandler(route.params.id);
});

watchEffect(() => {
    coffeeStore.detailsHandler(route.params.id);
});

</script>

<template>
    <div v-if="route.params.category === 'reMenu'" class="Container">
        <div class="titleContainer">
            <h1 class="title"> {{ reMenuStore.detailsReMenu.value?.name }}</h1>
        </div>
        <div class="contentContainer">
            <div class="content">
                {{ reMenuStore.detailsReMenu.value?.price }}
            </div>
            <div>
                <img class="imgBox" :src="reMenuStore.detailsReMenu.value?.img" :alt="reMenuStore.detailsReMenu.value?.name" />
            </div>
        </div>
        <button class="cancel-button" @click="$router.push('/')">취소</button>
    </div>

    <div v-if="route.params.category === 'coffee'" class="Container">
      <div class="titleContainer">
        <h1 class="title">{{ coffeeStore.detailsCoffee.value?.name }}</h1>
      </div>
      <div class="contentContainer">
        <div class="content">
          {{ coffeeStore.detailsCoffee.value?.price }}
        </div>
        <div>
          <img class="imgBox" :src="coffeeStore.detailsCoffee.value?.img" :alt="coffeeStore.detailsCoffee?.name" />
        </div>
      </div>
      <button class="cancel-button" @click="$router.push('/')">취소</button>
    </div>

</template>

<style scoped>
.Container {
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