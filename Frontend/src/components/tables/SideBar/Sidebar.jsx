// Sidebar.js
import React from 'react';
import "./Sidebar.css";
import { ExportButton } from '../../ExportButton/ExportButton';

function Sidebar({
  tables,
  setTables,
  tableCounter,
  setTableCounter,
  editingTable,
  setEditingTable,
  showActions,
  setShowActions,
  expandedTable,
  setExpandedTable,
  addTable,
  handleRename,
  addColumn,
  updateColumn,
  deleteColumn,
  duplicateTable,
  toggleExpand,
  addComment,
}) {
  return (
    <div className="w-50 px-2">
        <h2 className="text-2xl text-center text-[#a33669] font-bold mb-4">Tools</h2>
        <ExportButton elementId="whiteBoard" />
      <button className="bg-[#FAC67A] text-gray-800 p-3 mt-2 px-4 cursor-pointer w-full text-lg" onClick={addTable}>
        + New table
      </button>
      <div className="mt-2">
        {tables.map((table, index) => (
          <div key={index} className="bg-[#dca552] rounded-md m-2 px-3 py-2">
            <div className="flex justify-between items-center text-[#a5386b] font-semibold">
              {editingTable === index ? (
                <input
                  type="text"
                  defaultValue={table.name}
                  onBlur={(e) => handleRename(index, e.target.value)}
                  autoFocus
                  className="text-[#a33669] font-semibold"
                />
              ) : (
                <span>{table.name}</span>
              )}

              {/* <i className="fa-solid text-[#a33669] fa-pen" onClick={() => setEditingTable(index)}></i>
               */}
               <div className='text-[#a33669] cursor-pointer ' onClick={() => setEditingTable(index)}>✏️</div>
              <div className="actions-icon" onClick={() => setShowActions(showActions === index ? null : index)}>
                {/* <i className="fa-solid text-[#a33669] fa-ellipsis-vertical"></i> */}
                <div>🔧</div>
                {showActions === index && (
                  <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => addColumn(index)}>
                      <i className="fa-solid text-[#a33669] fa-columns"></i> Add column
                    </div>
                    <div className="dropdown-item">
                      <i className="fa-solid text-[#a33669] fa-database"></i> Add index
                    </div>
                    <div className="dropdown-item" onClick={() => addComment(index)}>
                      <i className="fa-solid text-[#a33669] fa-comment"></i> Add comment
                    </div>
                    <div className="dropdown-item" onClick={() => duplicateTable(index)}>
                      <i className="fa-solid text-[#a33669] fa-copy"></i> Duplicate table
                    </div>
                    <div className="dropdown-item" onClick={() => {
                      setTables(tables.filter((_, i) => i !== index));
                      setShowActions(null);
                    }}>
                      <i className="fa-solid text-[#a33669] fa-trash"></i> Delete table
                    </div>
                  </div>
                )}
              </div>
              <div className="text-[#a33669] p-2 cursor-pointer" onClick={() => toggleExpand(index)} >⚙️</div>

            </div>

            {/* Show table data if the table is expanded */}
            {expandedTable === index && (
              <>
                <div className="table-columns w-52">
                  {table.columns.map((column, colIndex) => (
                    <div key={colIndex} className=" w-full flex justify-center items-center gap-2">
                      <input
                        type="text"
                        value={column.name}
                        onChange={(e) => updateColumn(index, colIndex, 'name', e.target.value)}
                        className="w-1/2 border border-black rounded-lg p-1"
                      />
                      <input
                        type="text"
                        value={column.type}
                        onChange={(e) => updateColumn(index, colIndex, 'type', e.target.value)}
                        className="w-1/2 border border-black rounded-lg p-1"
                      />
                      {column.name !== 'id' && (
                        <div className="column-options">
                          <i className="fa-solid text-[#a33669] fa-ellipsis-vertical"></i>
                          <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={() => deleteColumn(index, colIndex)}>
                              <i className="fa-solid text-[#a33669] fa-trash"></i> Delete Column
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="table-comments">
                  {table.comments.map((comment, idx) => (
                    <div key={idx} className="comment-input w-full p-2 mt-2 rounded border border-gray-900 text-[#832b54]" placeholder="Add a comment">
                      <i className="fa-solid text-[#a33669] fa-comment"></i> {comment}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
