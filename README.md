# Next.js Boilerplate

A modern starter template for **Next 15 / React 19** projects — equally ready
for a website _or_ a full‑blown dashboard.

---

## ✨ Key Features

| Area               | What you get                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| **Core stack**     | Next 15 • React 19 • TypeScript 5 • Tailwind 4                                                                 |
| **Design tokens**  | Centralized colors via `@theme` (`primary-*`, `danger-*`, etc.)                                                |
| **UI library**     | Re‑usable primitives – Button, Card, Modal, Toast, Loader, Skeleton, Inputs, Select, Checkbox, Radio, Textarea |
| **Data layer**     | React Query 5 + custom provider                                                                                |
| **Form helpers**   | Controlled inputs, RHF + Zod ready                                                                             |
| **Modal system**   | Portal, ESC, click‑outside, focus‑trap                                                                         |
| **Feedback**       | Sonner toasts, Loader / Skeleton components                                                                    |
| **Testing & lint** | Jest 29 + RTL, ESLint 9, Prettier 3                                                                            |
| **Path alias**     | `@/…` → `app/…`                                                                                                |

---

## 🚀 Getting Started

```bash
npm i        # install
npm dev      # run dev server (Turbopack)
```

---

## 🗂️ Project Structure (partial)

```bash
app/
components/
  ui/
    Button.tsx
    Card.tsx
    loaders/
    skeletons/
    forms/
providers/
styles/
  globals.css
  theme.css
lib/
__tests__/
```

---

## 🛠️ Theme Tokens

```css
/* styles/theme.css */
@theme {
  --color-primary-500: #3b82f6;
  --color-danger-500: #ef4444;
  /* … */
}
```

Use them via utilities: `bg-primary-500`, `border-danger-500`, etc.

---

## 🧩 Sample Usage

```tsx
import Button from '@/components/ui/Button'
import { useModal } from '@/providers/ModalProvider'

function Demo() {
  const { openModal } = useModal()
  return (
    <Button
      variant='primary'
      onClick={() => openModal(<p>Hello modal</p>)}
    >
      Open modal
    </Button>
  )
}
```

---

## ⚙️ Scripts

| Command     | Purpose           |
| ----------- | ----------------- |
| `npm dev`   | Run dev server    |
| `npm build` | Production build  |
| `npm start` | Start prod server |
| `npm lint`  | ESLint + Prettier |
| `npm test`  | Jest + RTL        |

---

## 📄 License

MIT © 2025 Ayomide Akintimehin
