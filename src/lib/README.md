# Lib

Wrap 3rd-party libs behind your own thin modules

Instead of importing Prisma/NextAuth/SDKs all over, create one wrapper file per vendor and export only what you use. This gives you:

- One place to mock in unit tests.
- Ability to swap libraries later without touching core.
