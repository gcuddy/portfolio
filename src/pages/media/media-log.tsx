import type { CollectionEntry } from "astro:content";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "../../components/Table";

type Media = CollectionEntry<"media">;

const columnHelper = createColumnHelper<Media>();

const Star = () => <span className="">★</span>;

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const columns = [
  columnHelper.accessor("data.title", {
    header: "Title",
    cell: (info) => <span className="font-medium">{info.getValue()}</span>,
  }),
  //   columnHelper.accessor("data.author", {
  //     header: "Author",
  //   }),
  columnHelper.accessor("data.type", {
    header: "Type",
    cell: (info) => <span className="">{capitalize(info.getValue())}</span>,
  }),
  columnHelper.accessor("data.date", {
    header: "Date",
    cell: (info) => (
      <span className="">{new Date(info.getValue()).toLocaleDateString()}</span>
    ),
  }),
  columnHelper.accessor("data.recommended", {
    header: () => <Star />,
    cell: (info) => <span className="">{info.getValue() ? <Star /> : ""}</span>,
  }),
];

const MediaLog = ({ media }: { media: Media[] }) => {
  const table = useReactTable({
    data: media,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
};

export default MediaLog;
