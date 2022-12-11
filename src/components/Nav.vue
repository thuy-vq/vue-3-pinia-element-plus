<script setup>
import { useAuthStore } from '@/stores';

const authStore = useAuthStore();
</script>

<template>
    <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
        <div class="navbar-nav">
            <router-link to="/" class="nav-item nav-link">Home</router-link>
            <router-link to="/users" class="nav-item nav-link">Users</router-link>
            <router-link to="/monster-slayer" class="nav-item nav-link">Monster Slayer</router-link>
            <router-link to="/teleport" class="nav-item nav-link">Teleport</router-link>
            <router-link to="/coach" class="nav-item nav-link">Coach</router-link>
            <button @click="authStore.logout()" class="btn btn-link nav-item nav-link">Logout</button>
        </div>
    </nav>
</template>