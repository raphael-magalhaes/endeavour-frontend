import ActionTypes from '../constants/ActionTypes'

export const onOpenLeftDrawer = () => {
    return {
        type: ActionTypes.ResponsiveAppBarDrawer.ON_OPEN_LEFT_DRAWER
    }
}

export const onCloseLeftDrawer = () => {
    return {
        type: ActionTypes.ResponsiveAppBarDrawer.ON_CLOSE_LEFT_DRAWER
    }
}