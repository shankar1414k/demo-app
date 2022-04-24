import client from "../client";

export const fetchUsers = () => client.get("/users", {baseURL:"https://test-app1.free.beeceptor.com"});

