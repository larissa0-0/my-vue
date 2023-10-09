<template>
    <div>
        <span>hello world</span>
        <p>hello</p>
    </div>
</template>

<script lang="ts">
    import { Vue, Options } from "vue-class-component";
    @Options({
        created(){
            const a:string = '123'
            console.log(a)
        }
    })
    export default class App extends Vue {
        
    }
</script>

<style lang="less">
    div{
        color: red;

        span{
            color: blue;
        }
    }
</style>