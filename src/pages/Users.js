import React from "react";
import Layout from "Layout";
import UserCard from "components/Users/UserCard";
import { users } from "utils/users";
import { SimpleGrid as Grid } from "@chakra-ui/core";

const Users = () => {
  return (
    <Layout>
      <h1>Users Page</h1>
      <Grid columns={[1, 2, 4]} gridGap={3}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Grid>
    </Layout>
  );
};

export default Users;
