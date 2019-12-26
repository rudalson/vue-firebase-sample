import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  // or you can pass an object
  icon: {
    name: 'watch',
    after: true // this will append the icon to the end of content
  }
})

Vue.toasted.register('error',
  (payload) => {
    return payload
  }, {
    icon: 'error',
    position: 'bottom-right',
    duration: 5000,
    className: 'subheading',
    action: {
      text: '닫기',
      onClick: (e, toastObject) => {
        toastObject.goAway(0)
      }
    }
  }
)
