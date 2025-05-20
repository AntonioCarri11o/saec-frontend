<template>
    <n-grid cols="1 400:2 600:3 900:4">
        <n-grid-item v-for="d in departments" :key="d.name" class="item">
            <SimpleGridItem :label="d.name" :borderColor="'#229ddc'"/>
        </n-grid-item>
    </n-grid>    
</template>

<script>
import SimpleGridItem from '@/components/shared/list-item/SimpleGridItem.vue';
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'AdminDepartmentGrid',
    props: {
        'data': {
            Array,
            required: true
        }
    },
    setup(props){
        const departments = computed(() => props.data)
        return {
            departments,
        }
    },
    data(){},
    components: {
        SimpleGridItem
    }
});
</script>
<style scoped>
.item {
    padding: 10px;
}
</style>