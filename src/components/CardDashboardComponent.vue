<template>
    <div>
        <n-card style="border-color:#0D5A79;border:2px;border-style:solid;border-radius: 10px;" size="small" :title="title"> {{count}} </n-card>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        count:{
            type:[Number,String],
            required:true
        }
    }
}
</script>