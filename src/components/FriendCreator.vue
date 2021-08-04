<template>
  <form @submit.prevent="submitData" class="friend-form box">
    <h2 class="friend-form__title">Add New Friend</h2>
    <div class="friend-form__inputs">
      <div class="friend-form__input-row">
        <label class="friend-form__label">Name</label>
        <input v-model="neName" class="friend-form__input" type="text"/>
      </div>
      <div class="friend-form__input-row">
        <label class="friend-form__label">Phone</label>
        <input v-model="newPhone" class="friend-form__input" type="tel"/>
      </div>
      <div class="friend-form__input-row">
        <label class="friend-form__label">Email</label>
        <input v-model="newEmail" class="friend-form__input" type="email"/>
      </div>
    </div>
    <div>
      <button class="friend-form__button">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      neName: '',
      newPhone: '',
      newEmail: ''
    };
  },
  methods: {
    submitData() {
      this.$emit('add-contact', this.neName, this.newPhone, this.newEmail);
    }
  }
};
</script>