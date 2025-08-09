import Game from '#types/Game';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { i18n } = useTranslation();

  return (
    <Card key={game.play || game.taptap} sx={{ width: 400 }}>
      <CardHeader
        avatar={
          <Avatar
            variant="rounded"
            src={`https://play-lh.googleusercontent.com/${game.icon}=s96`}
            sx={{ width: 48, height: 48 }}
          />
        }
        title={game.name[i18n.language]}
        subheader={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating
              name="read-only"
              value={game.rating}
              readOnly
              precision={0.1}
              size="small"
              sx={{ mr: 0.5 }}
            />
            <Box sx={{ fontSize: 14 }}>{game.rating?.toFixed(1)}</Box>
          </Box>
        }
      />
      <CardMedia
        component="img"
        width={640}
        height={360}
        image={`https://play-lh.googleusercontent.com/${game.screenshots[0]}=w640-h360`}
        sx={{
          width: '100%',
          height: '225px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <CardActions>
        {game.play && (
          <IconButton
            href={`https://play.google.com/store/apps/details?id=${game.play}`}
            title="Google Play"
          >
            <img src="/play.svg" width={24} height={24} />
          </IconButton>
        )}
        {game.fdroid && (
          <IconButton href={`https://f-droid.org/packages/${game.fdroid}/`} title="F-Droid">
            <img src="/fdroid.svg" width={24} height={24} />
          </IconButton>
        )}
        {game.taptap && (
          <IconButton href={`https://www.taptap.cn/app/${game.taptap}?os=android`} title="TapTap">
            <img src="/taptap.svg" width={24} height={24} style={{ borderRadius: 4 }} />
          </IconButton>
        )}
        {game.xiaomi && (
          <IconButton href={`https://app.mi.com/details?id=${game.xiaomi}`} title="小米应用商店">
            <img src="/xiaomi.svg" width={24} height={24} style={{ borderRadius: 4 }} />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
