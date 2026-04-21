/* Intentionally noisy: demonstrates why postinstall scripts are a supply-chain risk surface.
   This file does nothing harmful — it only logs. Remove or harden in a real project. */
// eslint-disable-next-line no-console
console.log(
  "[workshop] postinstall ran — a malicious package could exfiltrate env vars or overwrite files here.",
);
