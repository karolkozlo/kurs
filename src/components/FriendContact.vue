<template>
  <li class="friend">
    <h2 class="friend__name">{{ name }} {{ favoriteText }}</h2>
    <button class="friend__button" @click="toggleFavorite">
      Toggle Favorite
    </button>
    <button class="friend__button" @click="toggleDetails">
      {{ detailsButtonText }}
    </button>
    <ul class="friend__details" v-if="areDetailsVisible">
      <li class="friend__detail">
        <span class="friend__detail-name">Phone:</span>
        <span class="friend__detail-value">{{ phone }} </span>
      </li>
      <li>
        <span class="friend__detail-name">Email:</span>
        <span class="friend__detail-value">{{ email }} </span>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    isFavorite: {
      type: Boolean
    }
  },
  data() {
    return {
      areDetailsVisible: false,
      isFriendFavorite: this.isFavorite
    };
  },
  computed: {
    detailsButtonText() {
      const hideShow = this.areDetailsVisible ? 'Hide ' : 'Show ';
      return `${hideShow} Details`;
    },
    favoriteText() {
      const favorite = this.isFriendFavorite ? '(Favorite)' : '';
      return favorite;
    }
  },
  methods: {
    toggleDetails() {
      this.areDetailsVisible = !this.areDetailsVisible;
    },
    toggleFavorite() {
      this.isFriendFavorite = !this.isFriendFavorite;
    }
  }
};
</script>