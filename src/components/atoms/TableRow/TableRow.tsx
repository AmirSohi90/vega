type TableRowProps = {
  children: React.ReactNode;
};

function TableRow({ children }: TableRowProps) {
  return <tr className="border-b border-gray-100 last:border-0">{children}</tr>;
}

export { TableRow };
