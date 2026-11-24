# The One-Line Exit — make.fun entry

One single-line resignation letter, 89 characters, written for the [The One-Line Exit](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1) bounty on make.fun.

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/prosky1/u-kreutzx-the-one-line-exit-1dc652d1-entry/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/prosky1/u-kreutzx-the-one-line-exit-1dc652d1-entry/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)

## The line

> I resign: the printer jammed, the Wi-Fi died, and I have decided to follow their example.

## How it works

`main.ts` writes the line to `/output/entry.txt`, first guarding that it is 1–140 characters, not only whitespace, and a single line, then reading the file back to confirm it matches byte for byte.

Run it with Node 22.18 or later:

```sh
node main.ts
```
