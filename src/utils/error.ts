class TgError extends Error {
  err: string;
  constructor(err) {
    super(err.message);
    this.err = err;
  }
}

export default {
  // 参数异常
  INPUT_ERROR: (message?: string) => new TgError({ code: 1001, message: message ? `Input Error: ${message}` : 'Input Error' }),

  // 数据异常
  CACHE_ERROR: (message: string, ...ret) => new TgError({ code: 2001, message: `DCache Error: ${message}: ${JSON.stringify(ret)}` }),
  NO_DATA_ERROR: (message?: string) => new TgError({ code: 2002, message: message || 'No Data Error' }),
  MISSING_DATA_ERROR: (message: string) => new TgError({ code: 2003, message }),

  // 逻辑异常
  ILLEGAL_ERROR: message => new TgError({ code: 3001, message: message || 'illegal request' }),

  // 系统异常
  DB_ERROR: (message?: string) => new TgError({ code: 9001, message: message || 'DB Error' }),
  HTTP_ERROR: (message?: any) => new TgError({ code: 9002, message: message ? `HTTP Error: ${message}` : 'HTTP Error' }),
  INTERFACE_ERROR: (message?: any) => new TgError({ code: 9003, message: message ? `Interface Error: ${message}` : 'Interface Error' }),
  SYSTEM_ERROR: (message?: any) => new TgError({ code: 9004, message: message ? `System Error: ${message}` : 'System Error' }),
};

export { TgError };