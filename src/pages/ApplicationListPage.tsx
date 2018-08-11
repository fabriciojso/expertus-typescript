import * as Faker from "faker/locale/pt_BR";
import * as React from "react";
import ApplicationList from "../components/ApplicationList";
import BaseTemplate from "../components/templates/BaseTemplate";

const getList = () => {
  const list = [];
  for (let i = 0; i < 100; i += 1) {
    list.push({
      id: Faker.random.number(1000),
      titulo: Faker.lorem.words(6),
      status: Faker.random.boolean()
    });
  }
  return list;
};

const ListPage = () => (
  <BaseTemplate>
    <ApplicationList items={getList()} />
  </BaseTemplate>
);

export default ListPage;
