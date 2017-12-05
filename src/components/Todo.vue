<template>
  <v-card style="margin-bottom: 20px;" color="purple darken-2" class="white--text">
    <v-card-title primary-title>
      <div>
        <div class="headline">{{todo.title}}</div>
        <div>{{todo.description}}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat dark>Remove</v-btn>
      <v-btn flat dark>Mark as complete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      },
    },
  };
</script>
