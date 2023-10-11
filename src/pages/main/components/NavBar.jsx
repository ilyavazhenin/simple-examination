import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const NavBar = () => {
  return (
    <header style={{ width: '100%' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        margin="normal"
        sx={{ position: "relative", bgcolor: 'lightgray', padding: 1.5 }}
      >
        <div>Тренажер для аналитиков</div>
        <nav>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link href="#">Вопросики</Link>
            </li>
          </ul>
        </nav>
        <div>Login?</div>
      </Stack>
    </header>
  );
};

export default NavBar;
