type TableHeaderProps = {
  header: string;
};

function TableHeader({ header }: TableHeaderProps) {
  return <th className="px-4 py-3 font-medium">{header}</th>;
}

export { TableHeader };
