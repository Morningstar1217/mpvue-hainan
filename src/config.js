import { xxx } from './api/user'

var config = {}

xxx()
    .then(res => {
        config.defaultColor = ''
    })
    .catch(err => {
        console.error(err)
    })

export { config }
