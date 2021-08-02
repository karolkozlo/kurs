<template>
  <li class="friend">
    <h2 class="friend__name">{{ friend.name }}</h2>
    <button class="friend__button" @click="toggleDetails">
      {{ detailsButtonText }}
    </button>
    <ul class="friend__details" v-if="areDetailsVisible">
      <li class="friend__detail">
        <span class="friend__detail-name">Phone:</span>
        <span class="friend__detail-value">{{ friend.phone }} </span>
      </li>
      <li>
        <span class="friend__detail-name">Email:</span>
        <span class="friend__detail-value">{{ friend.email }} </span>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      areDetailsVisible: false,
      friend: {
        id: 1,
        name: 'Manuel Lorenz',
        phone: '954 354 545',
        email: 'manuel@mail.com'
      },
    };
  },
  methods: {
    toggleDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
    }
  },
  computed: {
    detailsButtonText() {
      const hideShow = this.areDetailsVisible ? 'Hide ' : 'Show ';
      return `${hideShow} Details`;
    }
  }
};
</script>