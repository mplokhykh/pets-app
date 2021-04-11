import React from "react";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Dialog} from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        suppressDeprecationWarnings: true
    },
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)'
            }
        }
    }
});

export function Modal({ isOpen, handleModalToggle, children }) {

    return <MuiThemeProvider theme={theme}>
        <Dialog
            open={!!isOpen}
            onClose={handleModalToggle}
            scroll="paper"
        >
            {children}
        </Dialog>
    </MuiThemeProvider>
}
