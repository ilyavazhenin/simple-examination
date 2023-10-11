import NavBar from './components/NavBar';
import Questions from './components/Questions';
import Answer from './components/Answer';
import Footer from './components/Footer';
import Stack from '@mui/material/Stack';

const Main = () => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      height={"100vh"}
    >
      <NavBar />
      <div>
        <Questions />
        <Answer />
      </div>
      <Footer />
    </Stack>
  );
};

export default Main;
