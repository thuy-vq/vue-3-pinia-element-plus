<script setup>
import { storeToRefs } from 'pinia';

import { useUsersStore } from '@/stores';

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();

const tableRowClassName = ({
    row,
    rowIndex,
}) => {
    if (rowIndex === 1) {
        return 'warning-row'
    } else if (rowIndex === 3) {
        return 'success-row'
    }
    return ''
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
];

</script>

<template>
    <h1>Users</h1>
    <router-link to="/users/add"><el-button type="primary" class="mb-2">Add User</el-button></router-link>

    <tr v-if="users.loading">
        <td colspan="4" class="text-center">
            <span class="spinner-border spinner-border-lg align-center"></span>
        </td>
    </tr>
    <tr v-if="users.error">
        <td colspan="4">
            <div class="text-danger">Error loading users: {{ users.error }}</div>
        </td>
    </tr>

    <template v-if="users.length">
        <el-table :data="users" stripe style="width: 100%">
            <el-table-column prop="firstName" label="First Name" width="300" />
            <el-table-column prop="lastName" label="Last Name" width="300" />
            <el-table-column prop="username" label="Username" width="300" />
            <el-table-column />
        </el-table>
    </template>


    <!-- <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table> -->
</template>
