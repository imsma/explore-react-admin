import { Datagrid, EmailField, List, SimpleList, TextField } from "react-admin";

export const UserSimpleList = () => (
  <List>
    <SimpleList
      primaryText={(record) => record.name}
      secondaryText={(record) => record.username}
      tertiaryText={(record) => record.email}
    ></SimpleList>
  </List>
);
