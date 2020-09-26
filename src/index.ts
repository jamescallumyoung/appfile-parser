import fs from 'fs';
import { isCommentLineStr } from './lib/handle-comments';
import { Line } from './interfaces/line';
import {
  aptCommandRunner,
  aptRepoCommandRunner,
  isAptLine,
  isAptRepoLine,
  isSnapLine,
  snapCommandRunner,
} from './lib';

(async function () {
  try {
    const data = fs.readFileSync('file.txt', 'utf-8');
    const lines: string[] = data.split(/\r?\n/); // split the contents by new line

    const lineObjs = lines.map<Line>((line) => {
      const lineTrimmed = line.trim();

      if (isCommentLineStr(lineTrimmed)) {
        return { command: 'comment', package: '' };
      }

      const words = lineTrimmed.split(' ');
      const [commandWord, ...rest] = words;

      return {
        command: commandWord,
        package: rest.join(' '),
      };
    });

    await aptRepoCommandRunner(lineObjs.filter(isAptRepoLine));
    await aptCommandRunner(lineObjs.filter(isAptLine));
    await snapCommandRunner(lineObjs.filter(isSnapLine));
  } catch (err) {
    console.error(err);
  }
})();
