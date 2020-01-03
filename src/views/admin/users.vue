<template>
    <v-card>
        <!-- <v-card-title primary-title>
            {{search}}
          <v-combobox
            v-model="search"
            :items="emails"
            label="이메일을 입력하세요"
            :loading="loadingSearch"
            @update:search-input="searchEmails"
          ></v-combobox>
        </v-card-title> -->
      <v-toolbar
        dark
        color="teal"
      >
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
          <v-data-table
            :headers="headers"
            :items="items"
            :options.sync="options"
            :server-items-length="totalCount"
            :items-per-page="5"
            :loading="loading"
            class="elevation-1"
            must-sort
          ></v-data-table>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn @click="list">get list</v-btn>
        </v-card-actions>
    </v-card>
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
          search: this.search
        }
      })
      this.totalCount = data.totalCount
      this.items = data.items
      this.loading = false
      console.log(this.options)
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
