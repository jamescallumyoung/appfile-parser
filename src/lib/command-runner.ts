import { Line } from '../interfaces/line';

import { promisify } from 'util';
import { exec } from 'child_process';

const execp = promisify(exec);

export const preCommandRunner = async (command: string): Promise<void> => {
  try {
    const { stdout, stderr } = await execp(command);
    if (stdout) console.log('stdout:', stdout);
    if (stderr) console.log('stderr:', stderr);
  } catch (err) {
    console.error(err);
  }
};

export const mainCommandRunner = (command: string) => async <T extends Line>(
  lines: T[]
): Promise<void> => {
  for (const line of lines) {
    try {
      const { stdout, stderr } = await execp(
        command.replace('%p', line.package)
      );
      if (stdout) console.log('stdout:', stdout);
      if (stderr) console.log('stderr:', stderr);
    } catch (err) {
      console.error(err);
    }
  }
};
