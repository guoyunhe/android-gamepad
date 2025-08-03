import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton } from '@mui/material';
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
        width={640}
        height={360}
        image={`${game.screenshots[0]}=w1280-h360`}
        sx={{
          width: '100%',
          height: 'auto',
        }}
      />
      <CardActions>
        <IconButton
          href={`https://play.google.com/store/apps/details?id=${game.play}`}
          title="Google Play"
        >
          <img src="/play.svg" width={24} height={24} />
        </IconButton>
        <IconButton href={`https://www.taptap.cn/app/${game.taptap}?os=android`} title="TapTap">
          <img src="/taptap.svg" width={24} height={24} style={{ borderRadius: 4 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
