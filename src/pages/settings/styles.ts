import { makeStyles } from '@mui/styles'
import { tokens } from '../../theme'
import { Theme } from '@mui/material'

export const useStyles:any = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return {
        root:{
            paddingLeft: '32px',
            paddingRight: '32px',
        },
        tabsWrapper: {
            borderBottom: `1px solid ${colors.borderColor}`
        },
        active:{
            borderBottom: `2px solid ${colors.blue} !important`
        },
        none:{
            border: 'none'
        }
    }
})