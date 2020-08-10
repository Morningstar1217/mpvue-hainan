import { xxx } from './api/user'

var config = {}

xxx()
    .then(res => {
        config.defaultColor = 'color:#ddd'
    })
    .catch(err => {
        console.error(err)
    })

export { config }
