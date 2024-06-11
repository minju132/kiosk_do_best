import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useReMenuStore = defineStore("reMenu",()=>{
    const router = useRouter();
    const reMenus = ref([{}]);
    const detailsReMenu = reactive({});

    /*
    ENV
    vite(빌드툴)를 사용하는 경우 프로젝트 로드시 .env 파일을 자바스크립트 엔진이 확인하여
    impor.meta.env에 등록한다.
    여기서 클라이언트의 실수로 환경 변수가 유출되는 것을 방지하기 위해 접두사가
    붙은 변수만 사용하게 된다.
    */

    const reMenuHandler = ()=>{   // 조회용
        fetch(import.meta.env.VITE_API_URL + "/reMenu")
        .then(response => response.json())
        .then(data => reMenus.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/reMenu/"+id)
        .then(response => response.json())
        .then(data => detailsReMenu.value = {...data});  // 깊은복사를 할 수 있게 하는 문법
    }

    return{reMenus, detailsReMenu, reMenuHandler, detailsHandler}
})

export const useCoffeeStore = defineStore("coffee",()=>{
    const router = useRouter();
    const coffees = ref([{}]);
    const detailsCoffee = reactive({});

    const coffeeHandler = ()=>{   // 조회용
        fetch(import.meta.env.VITE_API_URL + "/coffee")
        .then(response => response.json())
        .then(data => coffees.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/coffee/"+id)
        .then(response => response.json())
        .then(data => detailsCoffee.value = {...data});  // 깊은복사를 할 수 있게 하는 문법
    }
    
    return{coffees, detailsCoffee, coffeeHandler, detailsHandler}
})