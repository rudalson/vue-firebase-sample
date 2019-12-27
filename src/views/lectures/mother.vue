<template>
    <v-card>
        <my-son name="Ryu" @help="listen"/>
        <my-son name="Kershaw"/>
        <my-son name="Matt"/>
        <my-daughter/>
        <v-card-text>
            <v-alert v-model="call" type="success">
                This is a success alert.
            </v-alert>
        </v-card-text>
    </v-card>
</template>

<script>
import mySon from '@/components/mySon'
import myDaughter from '@/components/myDaughter'
export default {
  components: {
    mySon,
    myDaughter
  },
  data () {
    return {
      call: false
    }
  },
  methods: {
    listen () {
      this.call = !this.call
    }
  }
}
</script>
