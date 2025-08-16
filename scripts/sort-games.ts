import type Game from '#types/Game';
import { readFile, writeFile } from 'fs/promises';

const gamesFile = './public/games.json';

const games: Game[] = JSON.parse(await readFile(gamesFile, 'utf-8'));

games.sort((a, b) => (a.play || '').localeCompare(b.play || ''));

function trimGooglePlayIcon(url: string) {
  if (url.startsWith('https://play-lh.googleusercontent.com/') && url.includes('=')) {
    return `${url.substring(0, url.indexOf('='))}=s96`;
  }
  return url;
}

function trimGooglePlayScreenshot(url: string) {
  if (url.startsWith('https://play-lh.googleusercontent.com/') && url.includes('=')) {
    return `${url.substring(0, url.indexOf('='))}=w640-h360`;
  }
  return url;
}

games.forEach((game) => {
  if (game.icon) {
    game.icon = trimGooglePlayIcon(game.icon);
  }
  game.screenshots = game.screenshots?.map(trimGooglePlayScreenshot);
});

await writeFile(gamesFile, JSON.stringify(games, null, 2));

await readFile(gamesFile, 'utf-8');
