async function main() {
  if (process.argv.length < 3) {
    console.error("not enough arguments");
    process.exit(1);
  }

  const content = new TextEncoder().encode(process.argv[2]);

  if (content.length > 32) {
    console.error("Input string is too long");
    process.exit(1);
  }

  const buffer = Buffer.alloc(32);
  buffer.set(content);

  console.log("0x" + buffer.toString("hex"));
}

main()
  .then(() => console.log("Done"))
  .catch((error) => console.error(error));
