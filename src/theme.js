import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#004259', // Dunkelblau
        },
        secondary: {
            main: '#CAD400', // Limettengrün
        },
        gray: {
            main: '#73797C', // Grau
        },
        consulting: {
            main: '#009FE3', // IT-Consulting
        },
        software: {
            main: '#B51546', // Individuelle Softwareentwicklung
        },
        digital: {
            main: '#F49600', // Digitale Lösungen
        },
        ai: {
            main: '#048D96', // Künstliche Intelligenz
        },
        security: {
            main: '#0075AB', // Datenschutz und Informationssicherheit
        },
        quality: {
            main: '#522583', // Qualitätsmanagement
        },
        academy: {
            main: '#BBA616', // Akademie
        },
    },
});

export default theme;
