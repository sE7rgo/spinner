const spinner = `|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|/-\|`;
let count = 0;
for (const spin of spinner) {
  count++;
  setTimeout(() => {
    process.stdout.write(spin);
    process.stdout.write('\r');
  }, 200 * count);
}