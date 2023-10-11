import Box from '@mui/material/Box';

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer style={{ width: '100%' }}>
      <Box
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{ bgcolor: 'lightgray', padding: 1.5 }}
      >
        <div className='footer-text'>Тренажер для аналитиков (c) {thisYear}</div>
      </Box>
    </footer>
      
  );
};

export default Footer;
