export const ERROR_KIND = {
  Validation: 'ValidationError',
  Auth: 'AuthError',
  NotFound: 'NotFound',
  Conflict: 'Conflict',
  RateLimit: 'RateLimit',
  Upstream: 'Upstream',
  Invariant: 'Invariant',
} as const;

export const ERROR_CODE = {
  Validation: {
    BAD_INPUT: 'BAD_INPUT',
  },
  Auth: {
    UNAUTHENTICATED: 'UNAUTHENTICATED',
    UNAUTHORIZED: 'UNAUTHORIZED',
  },
  NotFound: {
    NOT_FOUND: 'NOT_FOUND',
  },
  Conflict: {
    CONFLICT: 'CONFLICT',
  },
  RateLimit: {
    RATE_LIMITED: 'RATE_LIMITED',
  },
  Upstream: {
    UPSTREAM_FAILED: 'UPSTREAM_FAILED',
  },
  Invariant: {
    INVARIANT: 'INVARIANT',
  },
} as const;

export type AppError =
  | {
      kind: (typeof ERROR_KIND)['Validation'];
      code: (typeof ERROR_CODE.Validation)['BAD_INPUT'];
      details: string;
      issues?: unknown;
    }
  | {
      kind: (typeof ERROR_KIND)['Auth'];
      code:
        | (typeof ERROR_CODE.Auth)['UNAUTHENTICATED']
        | (typeof ERROR_CODE.Auth)['UNAUTHORIZED'];
      details?: string | undefined;
    }
  | {
      kind: (typeof ERROR_KIND)['NotFound'];
      code: (typeof ERROR_CODE.NotFound)['NOT_FOUND'];
      resource: string;
    }
  | {
      kind: (typeof ERROR_KIND)['Conflict'];
      code: (typeof ERROR_CODE.Conflict)['CONFLICT'];
      details?: string | undefined;
    }
  | {
      kind: (typeof ERROR_KIND)['RateLimit'];
      code: (typeof ERROR_CODE.RateLimit)['RATE_LIMITED'];
    }
  | {
      kind: (typeof ERROR_KIND)['Upstream'];
      code: (typeof ERROR_CODE.Upstream)['UPSTREAM_FAILED'];
      service: string;
      details?: string | undefined;
    }
  | {
      kind: (typeof ERROR_KIND)['Invariant'];
      code: (typeof ERROR_CODE.Invariant)['INVARIANT'];
      details: string;
    };

export class AppException extends Error {
  constructor(public e: AppError) {
    super(e.code);
  }
}

export const err = {
  badInput: (details: string, issues?: unknown) =>
    new AppException({
      kind: ERROR_KIND.Validation,
      code: ERROR_CODE.Validation.BAD_INPUT,
      details,
      issues,
    }),
  unauthenticated: () =>
    new AppException({
      kind: ERROR_KIND.Auth,
      code: ERROR_CODE.Auth.UNAUTHENTICATED,
    }),
  unauthorized: (details?: string) =>
    new AppException({
      kind: ERROR_KIND.Auth,
      code: ERROR_CODE.Auth.UNAUTHORIZED,
      details,
    }),
  notFound: (resource: string) =>
    new AppException({
      kind: ERROR_KIND.NotFound,
      code: ERROR_CODE.NotFound.NOT_FOUND,
      resource,
    }),
  conflict: (details?: string) =>
    new AppException({
      kind: ERROR_KIND.Conflict,
      code: ERROR_CODE.Conflict.CONFLICT,
      details,
    }),
  invariant: (details: string) =>
    new AppException({
      kind: ERROR_KIND.Invariant,
      code: ERROR_CODE.Invariant.INVARIANT,
      details,
    }),
};
