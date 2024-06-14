import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  ShowButton,
  EditButton,
} from "react-admin";
import MyUrlField from "../../Controls/MyUrlField";

export const MyUserList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="email" />
          <TextField source="phone" />
          <MyUrlField source="website" />
          <TextField source="company.name" label="Company" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};
