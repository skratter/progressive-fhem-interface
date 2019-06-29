import io from 'socket.io-client'

const options = {
    timeout: 5000,
    'sync disconnect on unload': true
}
const server = 'https://smart.skratter.com:8086'
const socket = io(server, options)

socket.on('connect', function () {
    socket.emit('getAllValuesOnChange')
    socket.emit('getAllDevicesOnChange')
})
socket.on('reading', function (data) {
    console.log('reading')
    console.log(data)
})

export default socket