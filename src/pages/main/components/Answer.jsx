import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Answer = () => {
  return (
    <section>
      <Box sx={{ maxWidth: 500, mx: 'auto', position: 'relative' }}>
        <FormControl>
          <TextField
            id="filled-basic"
            label="Ваш ответ"
            variant="filled"
            sx={{ width: 500 }}
          />
          <Button
            sx={{ maxWidth: 135, my: 1.5, alignSelf: 'end' }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Проверить
          </Button>
        </FormControl>
      </Box>
    </section>
  );
};

export default Answer;
