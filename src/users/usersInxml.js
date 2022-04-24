import client from "../client";

export const fetchUsersInxml = () => client.get("/usersxml",{baseURL:"https://test-app1.free.beeceptor.com"});

