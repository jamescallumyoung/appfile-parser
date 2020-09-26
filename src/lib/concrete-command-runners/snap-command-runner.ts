import { Line } from '../../interfaces/line';
import { mainCommandRunner, preCommandRunner } from '../command-runner';

export interface SnapLine extends Line {
  command: 'snap';
}

export function isSnapLine(line: Line): line is SnapLine {
  return line.command === 'snap';
}

export const snapCommandRunner = async (
  snapLines: SnapLine[]
): Promise<void> => {
  await preCommandRunner('echo "snap update"');

  const snapMainCommandRunner = mainCommandRunner(
    'echo "sudo snap install %p"'
  );
  await snapMainCommandRunner(snapLines);
};
