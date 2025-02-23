"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

// Definindo tipos para o componente Tooltip
export const Tooltip = ({ children }: { children: React.ReactNode }) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root delayDuration={100}>
      {children}
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = ({ children }: { children: React.ReactNode }) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      side="top"
      className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow-md"
    >
      {children}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
);
