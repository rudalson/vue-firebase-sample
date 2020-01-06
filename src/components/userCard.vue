<template>
    <v-card :color="item.color" dark :loading="loading">
        <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.photoURL | imgCheck"></v-img>
            </v-avatar>

            <div>
                <v-card-title class="mb-2" v-text="item.email"></v-card-title>
                <v-card-subtitle>{{item.displayName | nameCheck}}</v-card-subtitle>
                <v-list-item-subtitle>
                    <v-select
                        class="ma-2"
                        v-model="item.level"
                        :items="levels"
                        solo
                        hide-details
                        @change="levelChange(item)"
                    ></v-select>
                </v-list-item-subtitle>
            </div>
        </div>
    </v-card>
</template>
<script>
export default {
  props: ['item'],
  data () {
    return {
      loading: false,
      levels: [
        { value: 0, text: '관리자' },
        { value: 1, text: '사용자' },
        { value: 2, text: '손님' }
      ]
    }
  },
  filters: {
    nameCheck (v) {
      if (v) return v
      return 'no name'
    },
    imgCheck (v) {
      if (v) return v
      return 'https://cdn.vuetifyjs.com/images/cards/halcyon.png'
    }
  },
  methods: {
    levelChange (v) {
      this.loading = true
      this.$axios.patch(`/admin/user/${v.uid}/level`, {
        level: v.level
      }).catch(e => {
        this.$toasted.global.error(e.message)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
