<template>
  <v-container fluid>
    <v-form v-model="valid">
      <v-text-field
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="50"
        required
      ></v-text-field>
      <v-text-field
        label="Description"
        v-model="description"
        :rules="descriptionRules"
        :counter="200"
        required
      ></v-text-field>
      <v-btn block large color="primary" :disabled="!valid">Add</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 50 || 'Name must be less than 50 characters',
        ],
        description: '',
        descriptionRules: [
          v => !!v || 'Description is required',
          v => v.length <= 200 || 'Description must be less than 200 characters',
        ],
      };
    },
  };
</script>
