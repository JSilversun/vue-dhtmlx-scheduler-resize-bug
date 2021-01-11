<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="isMini = !isMini" />
    </v-app-bar>
    <v-navigation-drawer clipped permanent app :mini-variant="isMini">
      <v-list>
        <v-list-item v-for="{title, to, icon} in links" :key="title" :to="to">
          <v-list-item-action>
            <v-icon>mdi-{{icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    isMini: false,
    links: [
      {
        title: 'Page 1',
        icon: 'poll-box',
        to: '/page1'
      },
      {
        title: 'Timeline',
        icon: 'folder',
        to: '/timeline'
      }
    ]
  }),
};
</script>
