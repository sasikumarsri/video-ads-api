export declare enum UserRole {
    ADMIN = "ADMIN",
    TV = "TV"
}
export declare class User {
    id: number;
    username: string;
    password: string;
    role: UserRole;
    created_at: Date;
    updated_at: Date;
}
