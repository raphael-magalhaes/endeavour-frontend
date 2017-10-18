import { connect } from 'react-redux'
import { onOpenLeftDrawer, onCloseLeftDrawer } from '../actions/ResponsiveDrawerActions'
import { onToggleTheme } from '../actions/ThemeActions'
import ResponsiveAppBarDrawer from '../components/ResponsiveAppBarDrawer'

const mapStateToProps = state => {
    return {
        isLeftDrawerOpen: state.isLeftDrawerOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOpenLeftDrawer: () => dispatch(onOpenLeftDrawer()),
        onCloseLeftDrawer: () => dispatch(onCloseLeftDrawer()),
        onToggleTheme: () => dispatch(onToggleTheme())
    }
}

const ResponsiveAppBarDrawerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResponsiveAppBarDrawer)

export default ResponsiveAppBarDrawerContainer