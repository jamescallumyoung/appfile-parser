import { Line } from '../../interfaces/line';
import { mainCommandRunner, preCommandRunner } from '../command-runner';

export interface AptLine extends Line {
  command: 'apt';
}

export function isAptLine(line: Line): line is AptLine {
  return line.command === 'apt';
}

export const aptCommandRunner = async (aptLines: AptLine[]): Promise<void> => {
  await preCommandRunner('echo "apt update"');
  await preCommandRunner('echo "apt upgrade"');

  const aptMainCommandRunner = mainCommandRunner('echo "apt install %p"');
  await aptMainCommandRunner(aptLines);
};
