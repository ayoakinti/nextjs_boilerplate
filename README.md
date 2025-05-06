# Next.js Boilerplate

A modern, full-featured starter for **Next 15 / React 19** projects—perfect for
a marketing website now, and easily extended later into a dashboard, docs site,
blog, or component library.

---

## ✨ Key Features

1.**UI Primitives**

- **Button**, **Card**
- **Loaders** (`Loader`, `LoaderText`, `FullscreenLoader`)
- **Skeletons** (`Skeleton`, `SkeletonTextBlock`, `SkeletonCard`,
  `SkeletonList`)
- **Form controls** (`Input`, `Textarea`, `SelectInput`, `Checkbox`,
  `RadioInput`)
- **Logo** component

  2.**Default Pages**  
   All your top-level routes live under `app/(pages)/…` (a Next.js route-group)
  so you have stub pages for: —no more 404s. Just edit the stubs in
  `app/(pages)/`.

  3.**Global Layout**

- **Header** with sticky, scroll-aware transparent→solid background, active-link
  highlighting, and a logo
- **Footer** with links to Privacy, Terms, Imprint, social
- Dark / light / system toggle in the header

  4.**Providers**

- **React Query** (`ReactQueryProvider`) with sane defaults
- **Modal** (`ModalProvider` + `useModal()`) in a portal with ESC,
  click-outside, focus-trap
- **Toast** (`ToastOutlet` + `useToast()`) via Sonner with rich colors
- **Theme** (`ThemeProvider`) via `next-themes` + Tailwind v4
  `@custom-variant dark`

  5.**API / Data Layer**

- `lib/api.ts`: Axios instance with JSON headers, credential support, error
  interceptor + `APIError` class
- Ready to extend per-repo (e.g. dashboard services)

  6.**Utility Functions**

- `lib/cn.ts`: `clsx` + `twMerge` helper
- `lib/formatCurrency.ts` / `lib/formatDate.ts`: `Intl`-based number & date
  formatters

  7.**Theming / Design Tokens**

  ```css
  /* styles/theme.css */
  @theme {
    --color-primary-500: #3b82f6;
    --color-primary-600: #2563eb;
    --color-danger-500: #ef4444;
    --color-warning-500: #facc15;
    /* …etc. */
  }
  @custom-variant dark (&:where(.dark, .dark *));
  ```

- Use Tailwind utilities like bg-primary-600, border-danger-500,
  dark:bg-zinc-900, etc.

  8.**Testing & Linting**

- Jest 29 + React Testing Library + ts-jest
- ESLint 9 + eslint-config-next + Prettier 3

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm dev         # Next.js + Turbopack

# 3. Lint & Test
npm lint
npm test
```

## 🗂️ Project Structure

```bash
app/
├── layout.tsx                 # RootLayout: providers + Header + <main> + Footer + ToastOutlet
├── (pages)/
│   ├── page.tsx               # Home   ("/")
│   ├── about/page.tsx         # About  ("/about")
│   ├── blog/page.tsx          # Blog   ("/blog")
│   ├── contact/page.tsx       # Contact("/contact")
│   ├── privacy/page.tsx       # Privacy("/privacy")
│   ├── terms/page.tsx         # Terms  ("/terms")
│   └── imprint/page.tsx       # Imprint("/imprint")
└── providers/
    ├── ReactQueryProvider.tsx
    ├── ModalProvider.tsx
    ├── ThemeProvider.tsx
    └── ToastOutlet.tsx

components/
└── ui/
    ├── Button.tsx
    ├── Card.tsx
    ├── Logo.tsx
    ├── loaders/
    │   ├── Loader.tsx
    │   ├── LoaderText.tsx
    │   └── FullscreenLoader.tsx
    ├── skeletons/
    │   ├── Skeleton.tsx
    │   ├── SkeletonTextBlock.tsx
    │   ├── SkeletonCard.tsx
    │   └── SkeletonList.tsx
    └── forms/
        ├── Input.tsx
        ├── Textarea.tsx
        ├── SelectInput.tsx
        ├── Checkbox.tsx
        └── RadioInput.tsx

lib/
├── api.ts                # Axios instance + interceptor + APIError
└── cn.ts                 # `clsx` + `twMerge` helper

styles/
├── globals.css           # Tailwind imports + custom-variant + @theme imports
└── theme.css             # Your color tokens

__tests__/                # Jest + RTL tests

tailwind.config.js        # `darkMode: 'class'`, content globs
tsconfig.json             # Path alias @/* → ./app/*
jest.config.ts            # moduleNameMapper for "@/…"
.eslintrc.js              # import/resolver settings

```

## 📝 Scripts

```bash
| Command      | Description                 |
| ------------ | --------------------------- |
| `npm dev`   | Start dev server            |
| `npm build` | Build for production        |
| `npm start` | Run production server       |
| `npm lint`  | Run ESLint + Prettier check |
| `npm test`  | Run Jest test suite         |

```

## 📄 License

MIT © 2025 Ayomide Akintimehin
