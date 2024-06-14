import { EmailField, Show, SimpleShowLayout, TextField } from "react-admin";

export const UserShow = () => (
  <Show>
    <SimpleShowLayout>
      <h2>MyUserView</h2>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </SimpleShowLayout>
  </Show>
);
