// import { useEffect, useState, type FC, type PropsWithChildren } from "react";
// import {
//   DeleteButton,
//   EditButton,
//   FilterDropdown,
//   getDefaultSortOrder,
//   List,
//   ShowButton,
//   useTable,
// } from "@refinedev/antd";
// import { getDefaultFilter, type HttpError } from "@refinedev/core";
// import type { GetFieldsFromList } from "@refinedev/nestjs-query";
// import { SearchOutlined } from "@ant-design/icons";
// import { Form, Grid, Input, Select, Space, Spin, Table } from "antd";
// import dayjs from "dayjs";
// import debounce from "lodash/debounce";
// import {
//   CustomAvatar,
//   ListTitleButton,
//   PaginationTotal,
//   Participants,
//   QuoteStatusTag,
//   Text,
// } from "@/components";
// import type { QuoteStatus } from "@/graphql/schema.types";
// import type { QuotesTableQuery } from "@/graphql/types";
// import { useCompaniesSelect } from "@/hooks/useCompaniesSelect";
// import { useUsersSelect } from "@/hooks/useUsersSelect";
// import { currencyNumber } from "@/utilities";
// import { QUOTES_TABLE_QUERY } from "./queries";
// import { useParams } from "react-router-dom";
// import ArticleService from "@/services/articles";
// import { Report } from "@/services/articles";

// type Quote = GetFieldsFromList<QuotesTableQuery>;

// const statusOptions: { label: string; value: QuoteStatus }[] = [
//   { label: "Draft", value: "DRAFT" },
//   { label: "Sent", value: "SENT" },
//   { label: "Active", value: "ACTIVE" },
// ];

// interface RouteParams {
//   id: string;
// }

// export const QuotesListPage: FC<PropsWithChildren> = ({ children }) => {
//   const [detail, setDetail] = useState<Report>();
//   const screens = Grid.useBreakpoint();
//   const { id } = useParams();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await ArticleService.getReportDetail(Number(id));
//         setDetail(response);
//       } catch (error) {
//         console.error("Failed to fetch report detail:", error);
//       }
//     };
//     getData();
//   }, [id]);

//   const {
//     tableProps,
//     searchFormProps,
//     filters,
//     sorters,
//     tableQuery: tableQueryResult,
//   } = useTable<Quote, HttpError, { title: string }>({
//     resource: detail ? detail._type : undefined, // Dynamically set the resource
//     onSearch: (values) => [
//       {
//         field: "title",
//         operator: "contains",
//         value: values.title,
//       },
//     ],
//     filters: {
//       initial: [
//         {
//           field: "title",
//           value: "",
//           operator: "contains",
//         },
//         {
//           field: "status",
//           value: undefined,
//           operator: "in",
//         },
//       ],
//     },
//     sorters: {
//       initial: [
//         {
//           field: "createdAt",
//           order: "desc",
//         },
//       ],
//     },
//     meta: {
//       gqlQuery: QUOTES_TABLE_QUERY,
//     },
//   });

//   if (!detail) {
//     return <Spin spinning={true} />;
//   }

//   return (
//     <div className="page-container">
//       <h3>{detail._type}</h3>
//       <List
//         breadcrumb={false}
//         contentProps={{ style: { marginTop: "28px" } }}
//         title={<ListTitleButton buttonText="Add report" toPath="quotes" />}
//       >
//         <Table {...tableProps} rowKey="id">
//           <Table.Column
//             title="Report №"
//             sorter
//             render={() => <Text style={{ whiteSpace: "nowrap" }}>1</Text>}
//           />
//           <Table.Column<Quote>
//             title="Created"
//             sorter
//             render={() => <Text>{dayjs(detail.created).fromNow()}</Text>}
//           />
//           <Table.Column<Quote>
//             title="Responsible"
//             defaultFilteredValue={getDefaultFilter("company.id", filters, "in")}
//             filterDropdown={(props) => (
//               <FilterDropdown {...props}>
//                 <Select
//                   placeholder="Search Company"
//                   style={{ width: 220 }}
//                   {...useCompaniesSelect().selectProps}
//                 />
//               </FilterDropdown>
//             )}
//             render={() => (
//               <Space>
//                 <Text style={{ whiteSpace: "nowrap" }}>
//                   {detail.responsible}
//                 </Text>
//               </Space>
//             )}
//           />
//           <Table.Column<Quote>
//             title="Status"
//             defaultFilteredValue={getDefaultFilter("status", filters, "in")}
//             filterDropdown={(props) => (
//               <FilterDropdown {...props}>
//                 <Select
//                   style={{ width: "200px" }}
//                   mode="multiple"
//                   placeholder="Select Stage"
//                   options={statusOptions}
//                 />
//               </FilterDropdown>
//             )}
//             render={() => <QuoteStatusTag status={detail.status} />}
//           />
//           <Table.Column<Quote>
//             fixed="right"
//             title="Actions"
//             dataIndex="actions"
//             render={(_, record) => (
//               <Space>
//                 <ShowButton
//                   hideText
//                   size="small"
//                   recordItemId={record.id}
//                   style={{ backgroundColor: "transparent" }}
//                 />
//                 <EditButton
//                   hideText
//                   size="small"
//                   recordItemId={record.id}
//                   style={{ backgroundColor: "transparent" }}
//                 />
//                 <DeleteButton
//                   hideText
//                   size="small"
//                   recordItemId={record.id}
//                   style={{ backgroundColor: "transparent" }}
//                 />
//               </Space>
//             )}
//           />
//         </Table>
//       </List>
//       {children}
//     </div>
//   );
// };
import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { Table, Space, Spin } from "antd";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import ArticleService from "@/services/articles";
import { Report } from "@/services/articles";
import { QuoteStatusTag, ListTitleButton } from "@/components";
import { DeleteButton, EditButton, List, ShowButton } from "@refinedev/antd";

interface RouteParams {
  id: string;
}

export const QuotesListPage: FC<PropsWithChildren> = ({ children }) => {
  const [detail, setDetail] = useState<Report | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await ArticleService.getReportDetail(Number(id));
        setDetail(response);
      } catch (error) {
        console.error("Failed to fetch report detail:", error);
      }
    };
    getData();
  }, [id]);

  if (!detail) {
    return <Spin spinning={true} />;
  }

  // Assuming `detail` is a single record, not an array of records.
  const dataSource = [
    {
      key: detail.id,
      reportNumber: 1, // Assuming report number is static or generated
      created: dayjs(detail.created).fromNow(),
      responsible: detail.responsible,
      status: detail.status,
    },
  ];
  console.log(detail);

  return (
    <div className="page-container">
      <h3>{detail._type}</h3>
      <List
        breadcrumb={false}
        contentProps={{ style: { marginTop: "28px" } }}
        title={<ListTitleButton buttonText="Add report" toPath="quotes" />}
      >
        <Table
          dataSource={dataSource}
          rowKey="key"
          style={{ padding: "0.5rem" }}
        >
          <Table.Column
            title="Report №"
            dataIndex="reportNumber"
            key="reportNumber"
            render={(text) => <div style={{ padding: "1rem" }}>{text}</div>}
          />
          <Table.Column
            title="Created"
            dataIndex="created"
            key="created"
            render={(text) => <div style={{ padding: "1rem" }}>{text}</div>}
          />
          <Table.Column
            title="Responsible"
            dataIndex="responsible"
            key="responsible"
            render={(text) => <div style={{ padding: "1rem" }}>{text}</div>}
          />
          <Table.Column
            title="Status"
            dataIndex="status"
            key="status"
            render={(status) => (
              <div style={{ padding: "1rem" }}>
                <QuoteStatusTag status={status} />
              </div>
            )}
          />
          <Table.Column
            title="Actions"
            key="actions"
            render={(_, record) => (
              <Space style={{ padding: "0.5rem" }}>
                <ShowButton
                  hideText
                  size="small"
                  recordItemId={record.id}
                  style={{ backgroundColor: "transparent" }}
                />
                <EditButton
                  hideText
                  size="small"
                  recordItemId={record.id}
                  style={{ backgroundColor: "transparent" }}
                />
                <DeleteButton
                  hideText
                  size="small"
                  recordItemId={record.id}
                  style={{ backgroundColor: "transparent" }}
                />
              </Space>
            )}
          />
        </Table>
      </List>
      {children}
    </div>
  );
};
