<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>

    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :isFavorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus">
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';

export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: '954 354 545',
          email: 'manuel@mail.com',
          isFavorite: false
        },
        {
          id: 2,
          name: 'Julie Jones',
          phone: '754 454 515',
          email: 'julie@mail.com',
          isFavorite: true
        },
        {
          id: 3,
          name: 'Marian Kowalczyk',
          phone: '454 401 515',
          email: 'marian@mail.pl',
          isFavorite: false
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    }
  }
};
</script>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

@color-primary: #58004d;
@color-primary-light: #ff0077;
@color-secondary: #ec3169;
@color-shadow: rgba(0, 0, 0, 0.26);

@font-primary: "Jost", sans-serif;

* {
  box-sizing: border-box;
}

html {
  font-family: @font-primary;

  body {
    margin: 0;

    header {
      box-shadow: 0 2px 8px @color-shadow;
      margin: 3rem auto;
      border-radius: 10px;
      padding: 1rem;
      background-color: @color-primary;
      color: white;
      text-align: center;
      width: 90%;
      max-width: 40rem;
    }

    #app ul,
    .friend__details {
      margin: 0;
      padding: 0;
      list-style: none;

      .friend__detail-name {
        font-weight: bold;
      }
    }

    #app li,
    .friend {
      box-shadow: 0 2px 8px @color-shadow;
      margin: 1rem auto;
      border-radius: 10px;
      padding: 1rem;
      text-align: center;
      width: 90%;
      max-width: 40rem;

      .friend__name {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: @color-primary;
        margin: 0 0 1rem 0;
      }

      .friend__button {
        font: inherit;
        cursor: pointer;
        border: 1px solid @color-primary-light;
        background-color: @color-primary-light;
        color: white;
        padding: 0.05rem 1rem;
        box-shadow: 1px 1px 2px @color-shadow;

        &.friend__button:hover,
        &.friend__button:active {
          background-color: @color-secondary;
          border-color: @color-secondary;
        }
      }
    }
  }
}
</style>
