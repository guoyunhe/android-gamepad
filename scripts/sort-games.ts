import type Game from '#types/Game';
import { readFile, writeFile } from 'fs/promises';

const gamesFile = './public/games.json';

const games: Game[] = JSON.parse(await readFile(gamesFile, 'utf-8'));

games.sort((a, b) => a.play.localeCompare(b.play));

await writeFile(gamesFile, JSON.stringify(games, null, 2));
