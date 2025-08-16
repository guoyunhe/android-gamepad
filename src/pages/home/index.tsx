import Game from '#types/Game';
import { Android as AndroidIcon, Search as SearchIcon } from '@mui/icons-material';
import { Box, Input, Typography, colors } from '@mui/material';
import { useState } from 'react';
import { useFetch } from 'react-fast-fetch';
import { useTranslation } from 'react-i18next';
import GameCard from './GameCard';

export default function HomePage() {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState('');
  let { data = [] } = useFetch<Game[]>('/games.json');

  data.sort((a, b) => b.rating - a.rating);

  if (keyword.trim()) {
    const keywordList = keyword.toLowerCase().trim().split(/\s/);
    data = data.filter((item) => {
      const names = Object.values(item.name).join(' ').toLowerCase();
      return keywordList.every((kw) => names.includes(kw));
    });
  }

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
        position="relative"
        overflow="hidden"
      >
        <AndroidIcon
          sx={{
            position: 'absolute',
            right: 0,
            bottom: -50,
            width: 200,
            height: 200,
            opacity: 0.3,
          }}
        />
        <AndroidIcon
          sx={{
            position: 'absolute',
            left: 0,
            top: -50,
            width: 200,
            height: 200,
            opacity: 0.3,
            transform: 'rotate(180deg)',
          }}
        />
        <Typography variant="h1" mb={4} align="center">
          {t('{{count}} Android Games Support Game Controllers', { count: data.length || 0 })}
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
        sx={{
          display: 'flex',
          p: 2,
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {data.map((item) => (
          <GameCard key={item.play || item.taptap} game={item} />
        ))}
      </Box>
    </Box>
  );
}
