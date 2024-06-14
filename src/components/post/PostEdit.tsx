import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import "./formStyles.css";
import PostTitle from "./PostTitle";

export const PostEdit = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput
        source="id"
        InputProps={{ disabled: true }}
        className="fullWidthInput"
      />
      <ReferenceInput
        source="userId"
        reference="users"
        className="fullWidthInput"
      />
      <TextInput source="title" className="fullWidthInput" />
      <TextInput source="body" multiline rows={8} className="fullWidthInput" />
    </SimpleForm>
  </Edit>
);
