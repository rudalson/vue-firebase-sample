<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat color="transparent">
        <v-toolbar-title>Account</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list two-line>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
            <!--        <v-list-tile-sub-title>bbb</v-list-tile-sub-title>-->
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">info</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="lime">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'email',
          title: 'home',
          to: '/'
        },
        {
          icon: 'search',
          title: 'about',
          to: '/about/'
        },
        {
          icon: 'apps',
          title: 'about2',
          to: '/about2/'
        }
      ]
    }
  },
  methods: {

  }
}
</script>
