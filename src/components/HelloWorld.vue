<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <AButton type="dashed" @click="count++">count is {{ count }}</AButton>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <a-form
      :model="formData"
      name="basic" autocomplete="off"
      @finish="onSubmit"
      @finishFailed="onError"
  >
    <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true,
        message: 'Please input your username!' }]"
    >
      <a-input v-model:value
                   ="formData.username" />
    </a-form-item>

    <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formData.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formData.remember">
        Remember me
      </a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit" @click="addItem">Continue</a-button>
    </a-form-item>
  </a-form>

  <ul>
    <li v-for="item of items" :key="item.id">
      {{ item.username }}
    </li>
  </ul>

  <div>
    {{ pets }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from "axios";
import petSearchService from "../service/PetSearchService.ts";

type Item = {
  id: number
  username: string
}

defineProps<{ msg: string }>()

const count = ref(0)
const items = ref<Item[]>([])
const pets = ref()

const formData = ref({
  username: "",
  password: "",
  remember: true,
});

const onSubmit = async (formData: any) => {
  console.log("Form Submitted" + "!:", formData);
};

async function getUser() {
  try {
    const res = await axios.get(`http://localhost:3000/user`);
    items.value = res.data;
  } catch (error) {

    console.log(error)
  }
}

async function addItem() {
  const res = await axios.post(`http://localhost:3000/user`, {
    username: formData.value.username,
    password: formData.value.password,
  });
  items.value = [...items.value, res.data]
}

async function getPets() {
  pets.value = await petSearchService.searchPets();
}

const onError = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

// getUser()
getPets()

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
