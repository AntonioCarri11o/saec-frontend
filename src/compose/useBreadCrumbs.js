import { computed } from 'vue';
import { useRoute } from "vue-router";

export default function useBreadCrumbs(routeMap) {
 const route = useRoute()

  const segments = computed(() => {
    const raw = route.path.split('/')
    return raw.filter(Boolean) // Elimina strings vacíos
  })

  const breadcrumbs = computed(() => {
    const segmentsList = []
    let currentPath = ''

    for (const segment of segments.value) {
      currentPath += '/' + segment
      const match = routeMap.find(r => r.path === currentPath)
      if (match) {
        segmentsList.push({
          label: match.label,
          to: match.path,
        })
      }
    }

    return segmentsList
  })

  return { breadcrumbs }
}