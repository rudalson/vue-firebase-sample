<template>
  <v-container grid-list-md fluid>
    <v-card>
      <v-toolbar dark color="teal">
        <v-toolbar-title>회원 관리</v-toolbar-title>
        <v-spacer/>
        <v-autocomplete
          v-model="email"
          :loading="loadingSearch"
          :items="emails"
          :search-input.sync="search"
          cache-items
          class="mx-4"
          flat
          hide-no-data
          hide-details
          label="이메일을 입력하세요"
          solo-inverted
          clearable
        ></v-autocomplete>
      </v-toolbar>
      <v-card-text>
        <!-- <v-data-table
          :headers="headers"
          :items="items"
          :options.sync="options"
          :server-items-length="totalCount"
          :items-per-page="5"
          :loading="loading"
          class="elevation-1"
          must-sort
        ></v-data-table> -->
        <v-data-iterator
          :items="items"
          :options.sync="options"
          :server-items-length="totalCount"
          :items-per-page="4"
          :loading="loading"
        >
          <template v-slot:default="props">
            <v-layout row wrap>
              <v-flex xs12 v-if="loading" class="text-center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
                <p>잠시만 기다려 주세요</p>
              </v-flex>
              <v-flex
                v-else
                v-for="item in props.items"
                :key="item.email"
                xs12
                sm6
                md4
                lg3
              >
                <v-card
                  :color="item.color"
                  dark
                >
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-avatar
                      class="ma-3"
                      size="125"
                      tile
                    >
                      <v-img :src="item.photoURL | imgCheck"></v-img>
                    </v-avatar>

                    <div>
                      <v-card-title
                        class="mb-2"
                        v-text="item.email"
                      ></v-card-title>

                      <v-card-subtitle>{{item.displayName | nameCheck}}</v-card-subtitle>
                    </div>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
          </template>
        </v-data-iterator>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      totalCount: 0,
      items: [],
      loading: false,
      headers: [
        {
          text: '유저키',
          value: 'uid'
        },
        { text: 'email', value: 'email' },
        { text: '이름', value: 'displayName' },
        { text: 'photoURL', value: 'photoURL' },
        { text: 'level', value: 'level' }
      ],
      options: {
        sortBy: ['email'],
        sortDesc: [false]
      },
      search: '',
      emails: [],
      email: null,
      loadingSearch: false
    }
  },
  watch: {
    options: {
      handler () {
        this.list()
      },
      deep: true
    },
    search (val) {
      val && val !== this.select && this.searchEmails(val)
    },
    email (n, o) {
      if (n !== o) {
        this.list()
      }
    }
  },
  filters: {
    nameCheck (v) {
      if (v) return v
      return '이름 없음'
    },
    imgCheck (v) {
      if (v) return v
      return 'https://cdn.vuetifyjs.com/images/cards/halcyon.png'
    }
  },
  methods: {
    async list () {
      this.loading = true
      const { data } = await this.$axios.get('/admin/users', {
        params: {
          offset: this.options.page > 0 ? (this.options.page - 1) * this.options.itemsPerPage : 0,
          limit: this.options.itemsPerPage,
          order: this.options.sortBy[0],
          sort: this.options.sortDesc[0] ? 'desc' : 'asc',
          search: this.email
        }
      })
      this.totalCount = data.totalCount
      this.items = data.items
      this.loading = false
    },
    searchEmails: _.debounce(
      function (val) {
        this.loadingSearch = true
        this.$axios.get('/admin/search', {
          params: { search: this.search }
        })
          .then(({ data }) => {
            this.emails = data
          })
          .catch(e => {
            this.$toasted.global.error(e.message)
          })
          .finally(() => {
            this.loadingSearch = false
            this.list()
          })
      },
      // 사용자가 입력을 기다리는 시간(밀리세컨드) 입니다.
      500
    )
  }
}
</script>

<style lang="stylus">

</style>
