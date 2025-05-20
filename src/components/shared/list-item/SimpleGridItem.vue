<template>
    <div :style="cardStyle">
        <n-card size="medium" embedded :theme-overrides="cardThemeOverrides">
            {{ content }}
        </n-card>
    </div>
        
</template>

<script>
import { computed, defineComponent } from 'vue';
export default defineComponent ({
    name: 'SimpleGridItem',
    props: {
        'borderColor': {
            type: String,
        },
        'label': {
            type: String,
            required: true
        }
    },
    setup(props){
        const cardStyle = {
            paddingLeft: '10px',
            backgroundColor: props.borderColor ? props.borderColor : '#778c96',
            overflow: 'hidden',
            borderRadius: '0 10px 10px 0',
        };
        const cardThemeOverrides = {
            borderColor: props.borderColor ? props.borderColor : '#778c96',
            lineHeight: 8,
            borderRadius: '0 10px 10px 0',
            fontSizeMedium: '18px'
        };
        const content = computed(() => props.label);
        return {
            cardThemeOverrides,
            cardStyle,
            content
        }
    },
    data(){}
});
</script>
