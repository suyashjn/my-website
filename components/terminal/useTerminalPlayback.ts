"use client";

import { useEffect, useState } from "react";
import type { TerminalBlock } from "./script";

const TYPE_SPEED_MS = 38;
const OUTPUT_DELAY_MS = 220;
const BLOCK_PAUSE_MS = 900;
const LOOP_PAUSE_MS = 2200;

type PlaybackState = {
  blockIndex: number;
  typedChars: number;
  showOutput: boolean;
};

export function useTerminalPlayback(
  blocks: TerminalBlock[],
  reducedMotion: boolean
) {
  const [state, setState] = useState<PlaybackState>({
    blockIndex: 0,
    typedChars: 0,
    showOutput: false,
  });

  useEffect(() => {
    if (reducedMotion || blocks.length === 0) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function schedule(fn: () => void, delay: number) {
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    }

    function tick(blockIndex: number, typedChars: number, showOutput: boolean) {
      setState({ blockIndex, typedChars, showOutput });
      const command = blocks[blockIndex].command;

      if (!showOutput && typedChars < command.length) {
        schedule(() => tick(blockIndex, typedChars + 1, false), TYPE_SPEED_MS);
      } else if (!showOutput) {
        schedule(() => tick(blockIndex, typedChars, true), OUTPUT_DELAY_MS);
      } else {
        const isLast = blockIndex === blocks.length - 1;
        const nextIndex = isLast ? 0 : blockIndex + 1;
        schedule(
          () => tick(nextIndex, 0, false),
          isLast ? LOOP_PAUSE_MS : BLOCK_PAUSE_MS
        );
      }
    }

    tick(0, 0, false);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [blocks, reducedMotion]);

  if (reducedMotion) {
    const last = blocks[blocks.length - 1];
    return {
      completedBlocks: blocks.slice(0, -1),
      current: last,
      typedCommand: last?.command ?? "",
      showCurrentOutput: true,
    };
  }

  return {
    completedBlocks: blocks.slice(0, state.blockIndex),
    current: blocks[state.blockIndex],
    typedCommand: blocks[state.blockIndex]?.command.slice(0, state.typedChars) ?? "",
    showCurrentOutput: state.showOutput,
  };
}
