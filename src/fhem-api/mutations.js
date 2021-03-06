import Vue from 'vue'

export default {
    /***************************************************************
     * From here we got IO Functions to interact with FHEM Server. *
     ***************************************************************/
    setSocket (state, io) {
        Vue.set(state, 'io', io)
    },
    getAllValues (state) {
        state.io.emit('JsonList2', '', function (data) {
            data.Results.forEach(function (element) {
                Vue.set(state, element.Name, element)
                // console.log(element.Name)
                // console.log(element)
            })
        })
    },
    setDevice (state, action) {
        let command = 'set ' + action.device + ' ' + action.state
        state.io.emit('commandNoResp', command)
    },
    setStatus (state, status) {
        let device = Object.keys(status)[0]
        if (status[device] !== 'onoff: 1' && status[device] !== 'onoff: 0' && status[device] !== 'reachable: 1') {
            console.log('Status changed: ' + device + ' to ' + status[device])
            state.io.emit('JsonList2', device, function (data) {
                Vue.set(state, device, data.Results[0])
            })
        }
    },
    getDevice (state, device) {
        console.log('getDevice')
        console.log(state)
        console.log(device)
        if (typeof state[device] === 'undefined') { return '' }
        return state[device]
    }
    // getJson (state, device) {
    //     state.io.emit('JsonList2', device, function (data) {
    //         console.log(data)
    //     })
    // },
    // getDeviceStatus (state, device) {
    //     if (typeof state.allValues !== 'undefined') {
    //         return state.allValues[device]
    //     }
    //     return undefined
    // },
}
