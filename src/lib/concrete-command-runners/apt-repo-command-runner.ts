import { Line } from '../../interfaces/line';
import { mainCommandRunner } from '../command-runner';

export interface AptRepoLine extends Line {
  command: 'apt-repo';
}

export function isAptRepoLine(line: Line): line is AptRepoLine {
  return line.command === 'apt-repo';
}

export const aptRepoCommandRunner = async (
  aptRepoLines: AptRepoLine[]
): Promise<void> => {
  const aptRepoMainCommandRunner = mainCommandRunner(
    `echo "sudo add-apt-repository '%p'"`
  );
  await aptRepoMainCommandRunner(aptRepoLines);
};
