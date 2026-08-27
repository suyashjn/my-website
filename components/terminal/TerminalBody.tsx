"use client";

import { terminalScript } from "./script";
import { useTerminalPlayback } from "./useTerminalPlayback";

type TerminalBodyProps = {
  reducedMotion?: boolean;
};

export default function TerminalBody({ reducedMotion = false }: TerminalBodyProps) {
  const { completedBlocks, current, typedCommand, showCurrentOutput } =
    useTerminalPlayback(terminalScript, reducedMotion);

  return (
    <div className="terminal-glass flex h-full w-full flex-col overflow-hidden rounded-lg border border-line font-mono text-[13px] leading-relaxed text-ink">
      <div className="terminal-glass-header flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[11px] tracking-wide text-dim">
          guest@portfolio
        </span>
      </div>
      <div className="flex-1 overflow-hidden px-3 py-2.5">
        {completedBlocks.map((block, i) => (
          <div key={i} className="mb-2">
            <p className="font-medium">
              <span className="text-accent">$</span> {block.command}
            </p>
            {block.output.map((line, j) => (
              <p key={j} className="text-dim">
                {line}
              </p>
            ))}
          </div>
        ))}
        {current && (
          <div>
            <p className="font-medium">
              <span className="text-accent">$</span> {typedCommand}
              {!showCurrentOutput && !reducedMotion && (
                <span className="animate-pulse text-flare">▍</span>
              )}
            </p>
            {showCurrentOutput &&
              current.output.map((line, j) => (
                <p key={j} className="text-dim">
                  {line}
                </p>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
