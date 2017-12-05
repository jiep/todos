<template>
  <v-container fluid grid-list-x1>
    <v-layout row wrap>
      <v-flex v-for="todo in todos" :key="todo.title" xs12>
        <Todo :todo="todo" />
      </v-flex>
    </v-layout>
    <v-btn @click="add" id="add" fab dark color="red">
      <v-icon dark>add</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
  import Todo from './Todo';

  export default {
    components: {
      Todo,
    },
    data() {
      return {
        todos: [
          {
            title: 'Todo 1',
            description: 'description 1',
          },
          {
            title: 'Todo 2',
            description: 'description 2',
          },
          {
            title: 'Todo 3',
            description: 'description 3',
          },
          {
            title: 'Todo 4',
            description: 'description 4',
          },
          {
            title: 'Todo 5',
            description: 'description 5',
          },
        ],
      };
    },
    methods: {
      add() {
        this.$router.push('new');
      },
    },
  };
</script>

<style>
  #add {
    position: fixed !important;
    bottom: 20px;
    right: 20px;
  }
</style>
