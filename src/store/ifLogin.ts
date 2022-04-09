import { ref } from "vue"

const IfLogin = {
    state: {
        ifLogin: ref(false)
    },
    setState(ifLogin: boolean) {
        this.state.ifLogin.value = ifLogin
        console.log('set', this.state.ifLogin.value)
    }
}
export default IfLogin