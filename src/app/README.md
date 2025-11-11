# App

Next.js glue layer calling core with adapters, keep super thin.

Route handler / Server Action does only:

1. Parse request
2. Construct adapters (or inject via factory)
3. Call core
4. Map to HTTP/Response or redirect
