import './App.css';
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';


// This is what will be used to color the pages----------
const pageTheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    background: {
      main: '#2D2D2D',

    },
    blanco: {
      main: '#E4E4E4',
    },
    verde: {
      main: '#02c39a',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  typography: {
    title: {
      fontFamily: 'Montserrat, sans-serif',
    },
    body: {
      fontFamily: 'Source Serif Pro, serif',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={pageTheme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
