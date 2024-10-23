<template>
    <div class="banner-layout" :style="{ backgroundColor: color }">
        <div class="content-layout">
            <div class="title"> {{ title }} </div>
            <button> Shop Now &#x2192; </button>
        </div>

        <div class="img-layout">
            <img :src="imgURL" alt="pic" />
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'imgURL', 'color'],
}
</script>

<style>
.banner-layout {
    width: 100%;
    max-width: 512px;
    height: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.img-layout {
    flex: 1; 
    display: flex; 
    justify-content: center;
    align-items: center;
}

.img-layout img {
    width: 100%;
    height: 250px;
    object-fit: contain;
    align-self: flex-end; /* make it go bottom */
}

.content-layout {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    justify-content: center;
}

.title {
    font-family: Quicksand, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
    color: #333;
}

button {
    background-color: #3BB77E;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px 15px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 10px;
}

button:hover {
    background-color: #32a46b;
}
</style>
