const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
    },
    boldText: {
        fontWeight: "bold"
    },
    darkText: {
        fontWeight: "bold",
        color: "black"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    navLink: {
        textDecoration: 'none',
        color: 'unset',
        fontSize: '1.4em',
        fontWeight: 'bold'
    },
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white,
            },
        },
    },
    primary: {},
    icon: {},
    list: {
        width: 250
    }
});

export default styles;
