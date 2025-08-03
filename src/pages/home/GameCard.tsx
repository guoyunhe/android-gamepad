import { Avatar, Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Game from '~/types/Game';

export interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { i18n } = useTranslation();

  return (
    <Card key={game.play || game.taptap} sx={{ width: 400 }}>
      <CardHeader
        avatar={<Avatar variant="rounded" src={game.icon} sx={{ width: 48, height: 48 }} />}
        title={game.name[i18n.language]}
        subheader={game.play}
      />
      <CardMedia
        component="img"
        width={1920}
        height={1080}
        image={`${game.screenshots[0]}=w1920-h1080`}
        sx={{
          width: '100%',
          height: 'auto',
        }}
      />
      <CardContent>TODO</CardContent>
    </Card>
  );
}
