# Components

- Prefer React Testing Library: test behavior, not implementation.
- Keep components pure/dumb where possible; move data fetching to a parent or loader.
- Wrap Next.js specifics with helpers:
- next/navigation – mock via vi.mock('next/navigation', ...)
- NextAuth session – provide a test wrapper that supplies SessionProvider with a fake session.
- For Server Components, test their pure helpers and treat the component itself with light integration/render tests where feasible (or promote logic into a testable hook).
- For client hooks, isolate vendor calls behind custom hooks that you can mock.
