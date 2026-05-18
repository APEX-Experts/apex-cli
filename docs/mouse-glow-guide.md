# MouseGlow Component and Hook Integration Guide

This guide explains how to properly implement the mouse hover glow effect for single containers and lists of elements using the custom React hook `useMouseGlow` and the `<MouseGlow />` component.

## Architecture Overview

The mouse glow effect relies on two synchronized parts:

1. **`useMouseGlow` Hook**: Tracks mouse moves, records coordinates (`x`, `y`) relative to the tracked container, and manages hover states.
2. **`MouseGlow` Component**: A Client Component that renders a relative radial gradient at the mouse coordinates, matching the brand colors and scaling perfectly with CSS.

### 1. The Hook: `useMouseGlow`

Located at `src/hooks/useMouseGlow.ts`. It provides the container ref, cursor position, hover state, and listener bindings:

```typescript
import { useMouseGlow } from "@/hooks/useMouseGlow";

const {
  ref, // Ref to bind to the outer container element
  position, // { x, y } coordinates relative to the container
  isHovered, // boolean indicating whether the container is hovered
  glowProps, // Object containing mouse event listeners to spread on the container
} = useMouseGlow<HTMLDivElement>();
```

### 2. The Component: `<MouseGlow />`

Located at `src/components/ui/MouseGlow.tsx`. Renders the radial glow gradient at the tracked cursor position.

---

## Single Container Implementation

For a standalone element, call `useMouseGlow` directly within the component and bind its returned values:

```tsx
"use client";

import React from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";

export function StandaloneCard() {
  const { ref, position, isHovered, glowProps } =
    useMouseGlow<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...glowProps}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8"
    >
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={800} // Radius of the glow in px
        color="217, 130, 47" // RGB format of signature Sinai orange
        opacityStart={0.15} // Opacity at the cursor center
        opacityEnd={0.03} // Opacity at the gradient edge
      />
      <h3 className="text-xl font-bold text-white relative z-10">
        Premium Card
      </h3>
      <p className="text-zinc-400 mt-2 relative z-10">Content goes here...</p>
    </div>
  );
}
```

---

## List/Map Implementation: Avoiding the Shared State Bug

> [!WARNING]
> **The Common Bug**: Instantiating a single hook instance at the parent level and sharing its `ref`, `position`, or `isHovered` across mapped elements will trigger the hover state on all items simultaneously or break mouse tracking due to ref overwriting.

### Incorrect (Buggy Pattern)

❌ **Do NOT do this:**

```tsx
// This will make hovering over one card light up all cards!
export function CardList({ items }) {
  const { ref, position, isHovered, glowProps } =
    useMouseGlow<HTMLDivElement>(); // ONE HOOK INSTANCE

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div ref={ref} {...glowProps} className="relative overflow-hidden">
          <MouseGlow x={position.x} y={position.y} isHovered={isHovered} />
          {item.name}
        </div>
      ))}
    </div>
  );
}
```

### Correct (Isolated Pattern)

✅ **DO DO THIS**: Extract the mapped item into a standalone sub-component, so each list card maintains its own isolated React hook instance and state container.

```tsx
"use client";

import React from "react";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { MouseGlow } from "@/components/ui/MouseGlow";

// 1. Define the sub-component for the individual Card
interface CardItemProps {
  name: string;
}

function CardItem({ name }: CardItemProps) {
  const { ref, position, isHovered, glowProps } =
    useMouseGlow<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...glowProps}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/2 p-6 transition-all duration-300 hover:bg-white/4"
    >
      <MouseGlow
        x={position.x}
        y={position.y}
        isHovered={isHovered}
        radius={600}
      />
      <span className="text-white font-medium relative z-10">{name}</span>
    </div>
  );
}

// 2. Render the sub-components within the list
export function CorrectCardList({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <CardItem key={index} name={item.name} />
      ))}
    </div>
  );
}
```

---

## Best Practices and Rules for Premium Implementation

1. **`relative overflow-hidden`**: The parent container must have both `relative` and `overflow-hidden` styles. Otherwise, the radial gradient will leak outside of the card boundaries.
2. **`z-index` Safety**: Ensure `<MouseGlow>` has `z-0` or equivalent and your actual text content is wrapped in a container with a class like `relative z-10` to keep content interactive and clickable above the gradient.
3. **Mobile & Reduced Motion**: The component automatically handles reduced motion fallbacks when configured or via browser settings to stay fully accessible.
4. **Tailoring Colors**: Use standard color variables matching the CSS theme. The default orange `217, 130, 47` matches the APEX Experts Signature Sinai Glow Orange perfectly.
