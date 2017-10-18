import { createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'

const DarkTheme = createMuiTheme({ 
    palette: { 
        type: 'dark',
        primary: {
            ...indigo,
            500: indigo[900]
        }
    } 
})

export default DarkTheme