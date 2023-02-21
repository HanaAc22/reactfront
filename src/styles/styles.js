import { makeStyles } from "@mui/styles";
const styles = (theme) => {
    return {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
                fontFamily: 'Roboto, sans-serif',
            },
            body: {
                backgroundColor: '#F8F8F8',
            },
            '.css-11l5t4l-MuiGrid-root': {
                display: 'none',
            },
            a: {
                textDecoration: 'none',
                color: '#0077FF',
            },
        // toolBar: {
        //     height: '10vh',
        //     display: 'flex',
        //     justifyContent: 'space-between',
        //     padding: '20px',
        //     backgroundColor: 'white',
        // },
        // logo: {
        //     color: 'blue',
        //     cursor: 'pointer',
        // },
        // link: {
        //     color: "#000"
        // },
        // menuIcon: {
        //     color: '#000',
        // },
        // formContainer: {
        //     flexGrow: 1,
        //     padding: '10px',
        //     maxWidth: '700px',
        //     margin: '30px auto',
        //     // [theme.breakpoints.between('xs', 'sm')]: {
        //     //     width: '100%',
        //     // },
        // },
        // form: {
        //     marginTop: '30px',
        // },
        // formHeading: {
        //     textAlign: 'center',
        // },
        heroBox: {
            width: '100%',
            display: 'flex',
            minHeight: '600px',
            alignItems: 'center',
            justifyContent: 'center',
        },
        gridContainer: {
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1300px',
            padding: '50px',
        },

        heroCardsBox: {
            width: '95%',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
        },
        heroServicesBox: {
            width: '100%',
            minHeight: '400px',
            backgroundColor: '#52a99d',
            marginTop: '50px',
        },
        servicesTitle: {
            padding: '50px',

        },
        heroServicesImg: {
           width: '100px',
           height: '100px'

        },
        servicesDetails: {
           display: 'flex',
           padding: '5px'
        },
        servicesGrid: {
            maxWidth: '350',
            paddingLeft: '40px',
            display: 'flex',

        },
        servicesDiv: {
           paddingLeft: '20px',
        }
    }
};

const useStyles = makeStyles(styles);
export default useStyles;