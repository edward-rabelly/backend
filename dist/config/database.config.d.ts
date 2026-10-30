import { Pool } from 'pg';
export declare const encuestaConfig: {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
};
export declare const pool: Pool;
export declare const testConnection: () => Promise<void>;
//# sourceMappingURL=database.config.d.ts.map