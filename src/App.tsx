import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./components/user/UserList";
import { UserSimpleList } from "./components/user/UserSimpleList";
import { MyUserList } from "./components/user/MyUserList";
import { PostList } from "./components/post/PostList";
import { UserShow } from "./components/user/ShowUser";
import { PostEdit } from "./components/post/PostEdit";
import { PostCreate } from "./components/post/PostCreate";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PeopleIcon from "@mui/icons-material/People";
import Dashboard from "./components/dashboard/Dashboard";

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={DynamicFeedIcon}
    />
    <Resource
      name="users"
      list={MyUserList}
      show={UserShow}
      edit={EditGuesser}
      recordRepresentation="name"
      icon={PeopleIcon}
    />
  </Admin>
);
