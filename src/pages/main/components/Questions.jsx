import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Questions = () => {
  return (
    <section>
      <Box
        sx={{ maxWidth: 500, mx: 'auto' }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <h2>Здесь название вопросика</h2>
          <div>2 / 10</div>
        </Stack>
        <div>
          <p>
            Есть много вариантов Lorem Ipsum, но большинство из них имеет не
            всегда приемлемые модификации, например, юмористические вставки или
            слова, которые даже отдалённо не напоминают латынь. Если вам нужен
            Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
            какой-нибудь шутки, скрытой в середине абзаца.
          </p>
        </div>
      </Box>
    </section>
  );
};

export default Questions;
