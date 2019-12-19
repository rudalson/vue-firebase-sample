
const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    // throw Error('에러났음')
    const t = Math.random() * 1000
    console.log(t + ' msec')
    setTimeout(() => {
      resolve(i)
    }, t)
  })
}

// const foo = () => {
//   for (let i = 0; i < 10; i++) {
//     longFunc(i)
//       .then(r => {
//         console.log(r)
//       })
//       .catch(e => {
//         console.error(e.message)
//       })
//   }
// }

const foo = async () => {
  for (let i = 0; i < 10; i++) {
    const r = await longFunc(i)
    console.log(r)
  }

  return 'done'
}

foo()
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.error(e.message)
  })

export default {
  foo
}
