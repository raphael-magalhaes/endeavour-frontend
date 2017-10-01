import { connect } from 'react-redux'
import { onChangeInput } from '../actions/InputActions'
import Input from '../components/Input'

const mapStateToProps = state => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (value) => { dispatch(onChangeInput(value)) }
    }
}

const InputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)

export default InputContainer