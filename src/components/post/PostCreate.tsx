import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import "./formStyles.css";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput
        source="userId"
        reference="users"
        className="fullWidthInput"
      />
      <TextInput source="title" className="fullWidthInput" />
      <TextInput source="body" multiline rows={8} className="fullWidthInput" />
    </SimpleForm>
  </Create>
);
