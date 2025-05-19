import { ref, onMounted, onUnmounted, computed } from 'vue';

export function useScreenCategory() {
    const width = ref(window.innerWidth)

    const updateWidth = () => {
        width.value = window.innerWidth;        
    }

    onMounted(() => {
        window.addEventListener('resize', updateWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateWidth);
    });

    const category = computed(() => {
        if(width.value < 400) return 'xshort';
        if(width.value < 600) return 'short';
        if(width.value < 900) return 'medium';
        if(width.value < 1200) return 'large';
        return 'xlarge';
    });
    return { width, category };
}