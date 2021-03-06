export default {
    allValues: state => state.allValues,
    io: state => state.io,
    device: state => device => (typeof state[device] === 'undefined') ? '' : state[device]
}
