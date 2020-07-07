const theme = {
    colors: {
        text: '#000',
        textLight: 'white',
        background: '#F4F4F4',
        primary: '#6A66F2',
        primaryLight: 'A29FFF',
        dark: '#413BFF',
        gray: 'C4C4C4',
        warning: '#F26666',
        warningActive: '#FF6099',
        active: '#9B66F2',
        cardBg: 'white'
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Roboto', sans-serif",
        monospace: 'Menlo, monospace',
    },
    breakpoints: [
        '40em', '56em', '64em', '100em',
    ],
    fontWeights: {
        thin: 200,
        body: 400,
        heading: 700,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    text: {
        'header-big': {
            fontSize: 5,
            fontWeight: 700
        }
    },
    links: {
        bold: {
            fontWeight: 'bold',
            textDecoration: 'underline'
        }
    },
    fontSizes: [
        14, 16, 20, 24, 28, 48, 64,
    ],
    app: {
        margin: 0,
        width: '100vw',
        minHeight: '100vh',
        bg: 'background',
        p: [3, 4, 5]
    },
    cards: {
        primary: {
            backgroundColor: 'white',
            padding: [4, 5],
            borderColor: 'white',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderRadius: '16px',
            width: ['100%', '66%', '50%', '50%', '33%'],
            boxShadow: '4px 4px 16px rgba(0, 0, 0, 0.25)'
        },
        tiny: {
            backgroundColor: 'white',
            padding: 2,
            borderColor: 'white',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderRadius: '8px'
        },
        viewport: {
            height: ['50vh', '50vh', '100vh'],
            padding: [2, 4]
        },
        container: {
            padding: [3, 4]
        },
        modal: {
            padding: 2,
            bg: 'background',
            width: ['100%', '100%', '100%']
        },
        selected: {
            borderColor: 'primary',
            borderWidth: '4px',
            borderStyle: 'solid',
            borderRadius: '8px'
        }
    },
    img: {
        selected: {
            borderColor: 'primary',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '4px'
        }
    },
    text: {
        error: {
            color: 'red'
        }
    },
    spacer: {
        flex: '1 1'
    },
    centering: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },
    vCentering: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        width: '100%'

    },
    forms: {
        slider: {
            color: 'primary',
            bg: 'background'
            // adjust default styles here
        },
        input: {
            borderColor: 'primary',
            backgroundColor: 'white',
            borderRadius: '28px',
            borderWidth: '2px',
            outline: 'none',
            padding: '14px',
            fontSize: 1,
            '&:active': {
                // backgroundColor: 'active',
                borderColor: 'active',
                outline: 'none'
            },
            '&:focus': {
                // backgroundColor: 'active',
                borderColor: 'active',
                outline: 'none'
            }
        },
        inputTiny: {
            borderColor: 'primary',
            borderRadius: '28px',
            borderWidth: '2px',
            outline: 'none',
            padding: '10px',
            fontSize: 1,
            '&:active': {
                // backgroundColor: 'active',
                borderColor: 'active',
                outline: 'none'
            },
            '&:focus': {
                // backgroundColor: 'active',
                borderColor: 'active',
                outline: 'none'
            }
        },
        select: {
            minWidth: '100px',
            color: 'text',
            backgroundColor: 'bg',
            borderWidth: '2px',
            borderColor: 'primary',
            '&:active': {
                // backgroundColor: 'active',
                borderColor: 'active',
                outline: 'none'
            },
            '&:focus': {
                // backgroundColor: 'active',
                borderColor: 'active',
                outline: 'none'
            }
        },
        searchbar: {
            backgroundColor: 'white',
            color: 'text',
            borderRadius: '28px',
            outline: 'none',
            padding: '14px',
            borderWidth: '2px',
            borderColor: 'primary',
            flex: 1,
            fontSize: 1,
            '&:active': {
                // backgroundColor: 'active',
                outline: 'none'
            },
            '&:focus': {
                // backgroundColor: 'active',
                outline: 'none'
            }
        },
    },
    buttons: {
        primary: {
            borderRadius: '20px',
            borderStyle: 'solid',
            borderColor: 'primary',
            borderWidth: '2px',
            outline: 'none',
            '&:active': {
                backgroundColor: 'active',
                borderColor: 'active',
                // outline:'none'
            }

        },
        warning: {
            borderRadius: '20px',
            backgroundColor: 'warning',
            borderColor: 'warning',
            borderStyle: 'solid',
            borderWidth: '2px',
            outline: 'none',
            '&:active': {
                borderColor: 'warningActive',
                backgroundColor: 'warningActive',
                // outline:'none'
            }
        },
        action: {
            borderRadius: '16px',
            borderStyle: 'solid',
            borderColor: 'primary',
            outline: 'none',
            fontSize: 0,
            '&:active': {
                backgroundColor: 'active',
                borderColor: 'active',
                // outline:'none'
            }

        },
        actionWarning: {
            borderRadius: '16px',
            borderStyle: 'solid',
            backgroundColor: 'warning',
            borderColor: 'warning',
            outline: 'none',
            fontSize: 0,
            '&:active': {
                backgroundColor: 'warningActive',
                borderColor: 'warningActive',
                // outline:'none'
            }
        },
        outline: {
            borderRadius: '20px',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'primary',
            color: 'primary',
            borderStyle: 'solid',
            borderWidth: '2px',
            outline: 'none',
            '&:active': {
                borderColor: 'active',
                color: 'active',
                // outline:'none'
            }
        },
        circle: {
            borderRadius: '50%',
            outline: 'none',
            bg: 'primary',
            '&:active': {
                backgroundColor: 'active',
                borderColor: 'active',
                // outline:'none'
            }
        },
        circleSmall: {
            borderRadius: '50%',
            paddingTop: '4px',
            paddingBottom: '4px',
            paddingLeft: '4px',
            paddingRight: '4px',

            outline: 'none',
            bg: 'primary',
            '&:active': {
                backgroundColor: 'active',
                borderColor: 'active',
                // outline:'none'
            }
        },
        icon: {
            outline: 'none',
            '&:active': {
                opacity: 0.5,
                // outline:'none'
            },
            '&:hover': {
                opacity: 0.5,
                // outline:'none'
            },
            static: {
                '&:active': {
                    opacity: 1,
                    // outline:'none'
                },
                '&:hover': {
                    opacity: 1,
                    // outline:'none'
                }
            }
        },
        close: {
            position: 'absolute',
            right: [2, 3, 4],
            top: [2, 3, 4],
            height: '48px',
            width: '48px',
            outline: 'none',
            '&:active': {
                opacity: 0.5,
                // outline:'none'
            },
            '&:hover': {
                opacity: 0.5,
                // outline:'none'
            }
        }
    }
}

export default theme