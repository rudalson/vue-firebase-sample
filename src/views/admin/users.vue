<template>
    <v-card>
        <v-card-title primary-title>
            사용자 관리
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="items"
            :options.sync="options"
            :server-items-length="totalCount"
            :items-per-page="5"
            :loading="loading"
            class="elevation-1"
          ></v-data-table>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
            <v-btn @click="list">get list</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      totalCount: 0,
      items: [],
      loading: true,
      options: {},
      headers: [
        {
          text: '유저키',
          value: 'uid'
        },
        { text: 'email', value: 'email' },
        { text: '이름', value: 'displayName' },
        { text: 'photoURL', value: 'photoURL' }
      ]
    }
  },
  watch: {
    options: {
      handler () {
        this.list()
      },
      deep: true
    }
  },
  methods: {
    async list () {
      const { data } = await this.$axios.get('/admin/users', {
        params: {
          offset: this.options.page > 0 ? (this.options.page - 1) * this.options.itemsPerPage : 0,
          limit: this.options.itemsPerPage
        }
      })
      console.log(this.options)
      this.totalCount = data.totalCount
      this.items = data.items
    }
  }
}
</script>

<style lang="stylus">

</style>
