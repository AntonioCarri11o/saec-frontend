<template>
    <div>
        <n-breadcrumb>
            <n-breadcrumb-item style="display: flex; flex-direction:row;">
                <n-icon :component="SpaceDashboardRound"/>
                <p class="breadcrumb">Panel General</p>
            </n-breadcrumb-item>
        </n-breadcrumb>
        <p class="title">Panel General</p>
    </div>
</template>

<script>
import { SpaceDashboardRound } from "@vicons/material";
import { NBreadcrumb, NBreadcrumbItem, NIcon } from "naive-ui";

export default {
    components : {
        NBreadcrumb,
        NBreadcrumbItem,
        NIcon,
    },

    setup() {
        return {
            SpaceDashboardRound
        }
    }
}
</script>

<style>
.title {
    font-size: 6rem;
    font-weight: 800;
    color: #0D5A79;
}
.breadcrumb {
    color: #0D5A79;

}
</style>