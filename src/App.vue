<template>
  <div id="app">

    <div class="container">
      <label for="name">Name</label>
      <input type="text" v-model="name">
      <button @click="submitName()">Add</button>
    </div>

    <div class="container">
      <ul>
        <li v-for="personName of names" v-bind:key="personName['.key']">
          <div class="wrapper" v-if="!personName.edit">
            <p>{{personName.name}}</p>
            <button @click="deleteName(personName['.key'])">Remove</button>
            <button @click="editName(personName['.key'])">Edit</button>
          </div>
          <div class="wrapper mt-2" v-else>
            <input type="text" v-model="personName.name">
            <button @click="updateName(personName)">Update</button>
            <button @click="cancelEdit(personName['.key'])">Cancel</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { namesRef } from './Firebase';

export default {
  data () {
    return {
     name: '',
     names: []
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({
        name: this.name,
        edit: false
      })
      this.name = '';
    },
    deleteName(key) {
      namesRef.child(key).remove()
    },
    editName(key) {
      namesRef.child(key).update({
        edit: true
      })
    },
    cancelEdit(key) {
      namesRef.child(key).update({
        edit: false
      })
    },
    updateName(person) {
      const key = person['.key'];
      namesRef.child(key).set({
        name: person.name,
        edit: false
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: transparent;
  border: 2px solid black;
}

.mt-2 {
  margin-top: 8px;
}
</style>
