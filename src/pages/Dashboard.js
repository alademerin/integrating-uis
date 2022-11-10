import { Container, Layout } from "flexibull";
import {
  SimpleSelect,
  i,
  Grid,
  FlexiPagination,
  PaleButton,
  CircleLine,
  ModalComponent,
  Notify,
  FlexiTable,
  Button,
  Input,
  AppBrand,
  SideNavigation,
  SideListing,
  Card,
} from "flexibull";
// import CircleLine from 'flexibull'
import { useState } from "react";
import { Theme } from "flexibull/build/theme";
import { ProfileCard } from "flexibull";
import "../styles/Dashboard.scss";

function Dashboard() {
  const pageOptions = [
    { value: 5, label: "5 Rows" },
    { value: 10, label: "10 Rows" },
    { value: 20, label: "20 Rows" },
    { value: 50, label: "50 Rows" },
  ];

  const columns = [
    {
      title: "Username",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    { title: "Age", dataIndex: "age", key: "age", width: 100 },
    { title: "Address", dataIndex: "address", width: 400, key: "address" },
    {
      title: "Status",
      dataIndex: "",
      key: "operations",
      render: () => (
        <SimpleSelect
          className="select"
          options={[
            { value: "Paid", label: "Paid" },
            { value: "Pending", label: "Pending" },
          ]}
          type="select"
        />
      ),
      width: 100,
    },
  ];

  let key = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  let data = [
    { name: "Jack", age: 28, address: "some where", key: "1" },
    { name: "Rose", age: 36, address: "House No4 First Ave.", key: "2" },
    { name: "Frederick", age: 18, aasyncAwaitddress: "3 Buba Close", key: "3" },
  ];

  const [collapseMenu, setCollapseMenu] = useState(true);
  const NavigationList = [
    {
      name: "Dashboard",
      icon: "icon-envelope-open",
      sub: [
        { name: "Filter", icon: "icon-filter", navlink: "../" },
        { name: "Code Dev", icon: "icon-code", navlink: "../" },
        { name: "Email", icon: " icon-envelope-open-o", navlink: "#" },
      ],
    },
    { name: "Reports", icon: "icon-chart-pie", navlink: "../" },
    { name: "Setting", icon: "icon-cog", navlink: "#" },
    {
      name: "Notifications",
      icon: " icon-list",
      sub: [
        { name: "Notice", icon: "icon-bell-alt", navlink: "#" },
        { name: "Network", icon: "icon-wifi", navlink: "#" },
        { name: "Payment", icon: " icon-credit-card-alt", navlink: "#" },
      ],
    },
  ];
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [tableData, setTableData] = useState(data);
  const [students, setStudents] = useState(tableData.length);
  const [current, setCurrent] = useState(1);
  const [modalOpened, setModalOpened] = useState(false);

  const addClicked = () => {
    const exists = tableData.some((student) => student.name === name);
    if (exists) {
      Notify("Username is already taken", { status: "error" });
      return;
    }
    if (name && age && address) {
      setTableData([...tableData, { name, age, address, key }]);
      key += 1;
      console.log(key);
      setStudents(students + 1);
      Notify("Student Added");
    }
  };
  const paginationChanged = (page) => {
    setCurrent(page);
  };

  return (
    <div>
      <Layout>
        <SideNavigation
          onClick={() => setCollapseMenu(!collapseMenu)}
          collapse={collapseMenu}
        >
          <AppBrand>
            <i className="icon-flexisaf" style={{ fontSize: 30 }} />
          </AppBrand>
          <ProfileCard indicator={Theme.PrimaryRed}>text</ProfileCard>
          <SideListing
            links={NavigationList}
            collapse={collapseMenu}
            // NavLink
          />
        </SideNavigation>
        <Container className="container">
          <div
            className="search-container"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Input className="search-bar" type="search" />
          </div>
          <Grid className="card-grid" pad="10px" default="30% 30% 30%">
            <Card
              onClick={() => alert("ouch")}
              title="Neco Super Admin"
              value="34"
              color={Theme.PrimaryRed}
              icon="icon-user-outline"
            />
            <Card
              title="Neco Admin"
              value="50"
              color={Theme.PrimaryBlue}
              icon="icon-user-outline"
            />
            <Card
              title="Registered Students"
              value={students}
              color={Theme.PrimaryColor}
              icon="icon-user-outline"
            />
          </Grid>
          <div className="table">
            <h2>Add New Candidate</h2>
            <Grid pad="5px" default="20% 20% 20% 10%" className="input-grid">
              <Input
                value={name}
                label="Name"
                onChange={(e) => setName(e.target.value)}
                className="text-input"
                type="text"
              />
              <Input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="text-input"
                type="number"
                label="Age"
                required
                forminput
              />
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="text-input"
                type="text"
                label="Address"
              />
              <Button onClick={addClicked}>Add</Button>
            </Grid>
            <FlexiTable columns={columns} data={tableData} className="fTable">
              {/* <FlexiPagination */}
              {/*   total={100} */}
              {/*   onChange={paginationChanged} */}
              {/*   current={current} */}
              {/*   pageCounts={pageOptions} */}
              {/*   /> */}
            </FlexiTable>
            {/* <CircleLine percentage={60} /> */}

            {/* <ModalComponent */}
            {/*   title="Basic Modal" */}
            {/*   subTitle="Optional Label" */}
            {/*   open={modalOpened} */}
            {/*   onClose={() => setModalOpened(false)} */}
            {/*   footer={<div><PaleButton>Default</PaleButton> <Button>Save</Button></div>} */}
            {/*   expandable */}
            {/* > */}
            {/* Passive modals notifications should only appear if there is an action the user needs to address immediately. Passive modal notifications are persistent on screen. </ModalComponent> */}
          </div>
        </Container>
      </Layout>
    </div>
  );
}

export default Dashboard;
