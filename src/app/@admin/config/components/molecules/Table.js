export const TableForm = ({ dataThead, dataBody }) => {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <table className="w-full min-w-[640px] table-auto">
        <thead>
          <tr className="text-sm text-center">
            {dataThead.map((item, index) => (
              <th key={index} className="border-b border-[#bdbdbd] py-5 px-5 ">
                <p className="block antialiased font-sans  font-bold uppercase ">
                  {item}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{dataBody}</tbody>
      </table>
    </div>
  );
};
