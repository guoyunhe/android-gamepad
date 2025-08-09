import type Game from '#types/Game';
import { readFile, writeFile } from 'fs/promises';

const gamesFile = './public/games.json';

const games: Game[] = JSON.parse(await readFile(gamesFile, 'utf-8'));

games.sort((a, b) => a.play.localeCompare(b.play));

function trimGooglePlayImage(url: string) {
  if (url.includes('=') || url.includes('/')) {
    return url.substring(url.lastIndexOf('/') + 1, url.indexOf('='));
  }
  return url;
}

games.forEach((game) => {
  if (game.icon) {
    game.icon = trimGooglePlayImage(game.icon);
  }
  game.screenshots = game.screenshots?.map(trimGooglePlayImage);
});

await writeFile(gamesFile, JSON.stringify(games, null, 2));

await readFile(gamesFile, 'utf-8');
