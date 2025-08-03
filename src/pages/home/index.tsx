import { Search as SearchIcon } from '@mui/icons-material';
import { Box, Input, Typography, colors } from '@mui/material';
import { useState } from 'react';
import { useFetch } from 'react-fast-fetch';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState('');
  const { data = [] } = useFetch('/games.json');

  console.log(data);

  return (
    <Box>
      <Box
        component="header"
        bgcolor={colors.green[500]}
        height={240}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1" mb={4}>
          {t('Android Games Support Game Controllers')}
        </Typography>
        <Input
          endAdornment={<SearchIcon />}
          placeholder={t('Search')}
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </Box>
      <Box
        component="section"
        height={400}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h2">{t('Content Block')}</Typography>
      </Box>
    </Box>
  );
}
