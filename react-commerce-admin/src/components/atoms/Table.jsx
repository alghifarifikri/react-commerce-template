const Table = ({ headers = [], datas = [], tableKey = [], onEdit, onView }) => {
  return (
    <table className="w-full text-left border-collapse">
      <thead className="bg-white">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="p-2 text-center">
              {header !== "Action" ? header : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datas.map((data, index) => (
          <tr key={index}>
            {tableKey.map((table, i) => (
              <td
                key={i}
                className={`p-2 text-center ${
                  index % 2 === 0 ? "bg-[#F8F8F8]" : "bg-white"
                }`}
              >
                {table === "index" ? (
                  index + 1
                ) : table === "action" ? (
                  <>
                    <button
                      className=" text-white px-2 py-1 rounded-lg"
                      onClick={() => onView(data)}
                    >
                      <img src="/images/icons/view.svg" />
                    </button>
                    <button
                      className=" text-white px-2 py-1 rounded-lg"
                      onClick={() => onEdit(data)}
                    >
                      <img src="/images/icons/edit.svg" />
                    </button>
                  </>
                ) : table === "status" ? (
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      data[table] === "AKTIF" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {data[table]}
                  </span>
                ) : (
                  data[table]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
