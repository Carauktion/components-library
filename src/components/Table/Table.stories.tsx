import { useState } from 'react'
import Row from './Row/Row'
import Cell from './Row/Cell'
import AccordionRow from './AccordionRow/AccordionRow'
import Search from './Search/Search'
import SearchBar from './Search/SearchBar'
import Sort from './Sort/Sort'
import SortBar from './Sort/SortBar'
import Pagination from './Pagination/Pagination'
import PaginationBar from './Pagination/PaginationBar'
import ColumnsView from './ColumnsView/ColumnsView'
import ColumnSwitcher from './ColumnsView/ColumnSwitcher'
import { SortState, FilterType } from './Sort/Sort'
import type { Option } from '../Select/Select'

export default {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', role: 'User' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending', role: 'User' },
]

const sortItems = [
  { id: 'name', name: 'Name', state: SortState.Asc },
  { id: 'email', name: 'Email', state: SortState.None },
  { id: 'status', name: 'Status', state: SortState.Desc },
  { id: 'role', name: 'Role', state: SortState.None },
]

const searchItems = [
  { id: 'name', name: 'Name', filterType: FilterType.TextInput, value: '' },
  { id: 'status', name: 'Status', filterType: FilterType.Select, value: '', options: [
    { name: 'All', value: '' },
    { name: 'Active', value: 'Active' },
    { name: 'Inactive', value: 'Inactive' },
    { name: 'Pending', value: 'Pending' },
  ] },
]

const columnSwitchers = [
  { id: 'name', label: 'Name', enabled: true },
  { id: 'email', label: 'Email', enabled: true },
  { id: 'status', label: 'Status', enabled: false },
  { id: 'role', label: 'Role', enabled: true },
]

export const BasicTable = {
  render: () => {
    const [selectedRow, setSelectedRow] = useState<number | null>(null)
    
    return (
      <div className="w-full max-w-4xl">
        <div className="bg-white border border-light-3-tint rounded-lg overflow-hidden">
          <SortBar>
            {sortItems.map((item, index) => (
              <Sort
                key={item.id}
                item={item}
                onClick={() => console.log('Sort clicked:', item.id)}
                withSeparator={index < sortItems.length - 1}
              />
            ))}
          </SortBar>
          
          {sampleData.map((row) => (
            <Row
              key={row.id}
              isSelected={selectedRow === row.id}
              onClick={() => setSelectedRow(row.id)}
              tableGrid={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
            >
              <Cell>{row.name}</Cell>
              <Cell>{row.email}</Cell>
              <Cell>
                <span className={`px-2 py-1 rounded text-xs ${
                  row.status === 'Active' ? 'bg-green-100 text-green-800' :
                  row.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {row.status}
                </span>
              </Cell>
              <Cell>{row.role}</Cell>
            </Row>
          ))}
        </div>
      </div>
    )
  },
}

export const TableWithSearch = {
  render: () => {
    const [searchValues, setSearchValues] = useState({
      name: '',
      status: '',
    })
    
    return (
      <div className="w-full max-w-4xl">
        <div className="bg-white border border-light-3-tint rounded-lg overflow-hidden">
          <SearchBar>
            {searchItems.map((item, index) => (
              <Search
                key={item.id}
                item={{
                  ...item,
                  value: searchValues[item.id as keyof typeof searchValues] || '',
                }}
                onChange={(value) => setSearchValues(prev => ({ ...prev, [item.id]: value }))}
                withSeparator={index < searchItems.length - 1}
              />
            ))}
          </SearchBar>
          
          <SortBar>
            {sortItems.map((item, index) => (
              <Sort
                key={item.id}
                item={item}
                onClick={() => console.log('Sort clicked:', item.id)}
                withSeparator={index < sortItems.length - 1}
              />
            ))}
          </SortBar>
          
          {sampleData.map((row) => (
            <Row
              key={row.id}
              tableGrid={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
            >
              <Cell>{row.name}</Cell>
              <Cell>{row.email}</Cell>
              <Cell>
                <span className={`px-2 py-1 rounded text-xs ${
                  row.status === 'Active' ? 'bg-green-100 text-green-800' :
                  row.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {row.status}
                </span>
              </Cell>
              <Cell>{row.role}</Cell>
            </Row>
          ))}
        </div>
      </div>
    )
  },
}

export const TableWithPagination = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(25)
    
    return (
      <div className="w-full max-w-4xl">
        <div className="bg-white border border-light-3-tint rounded-lg overflow-hidden">
          <SortBar>
            {sortItems.map((item, index) => (
              <Sort
                key={item.id}
                item={item}
                onClick={() => console.log('Sort clicked:', item.id)}
                withSeparator={index < sortItems.length - 1}
              />
            ))}
          </SortBar>
          
          {sampleData.map((row) => (
            <Row
              key={row.id}
              tableGrid={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
            >
              <Cell>{row.name}</Cell>
              <Cell>{row.email}</Cell>
              <Cell>
                <span className={`px-2 py-1 rounded text-xs ${
                  row.status === 'Active' ? 'bg-green-100 text-green-800' :
                  row.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {row.status}
                </span>
              </Cell>
              <Cell>{row.role}</Cell>
            </Row>
          ))}
          
          <PaginationBar
            pagesAmount={10}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onSizeChange={setPageSize}
            currentSize={pageSize}
            onListClick={() => console.log('List clicked')}
            onDocumentClick={() => console.log('Document clicked')}
            onSaveClick={() => console.log('Save clicked')}
          />
        </div>
      </div>
    )
  },
}

export const AccordionTable = {
  render: () => {
    return (
      <div className="w-full max-w-4xl">
        <div className="bg-white border border-light-3-tint rounded-lg overflow-hidden">
          {sampleData.map((row) => (
            <AccordionRow
              key={row.id}
              rowContent={
                <div className="flex items-center gap-4">
                  <span className="font-semibold">{row.name}</span>
                  <span className="text-sm text-gray-500">{row.email}</span>
                </div>
              }
            >
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Status</label>
                    <p className="text-sm">{row.status}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Role</label>
                    <p className="text-sm">{row.role}</p>
                  </div>
                </div>
              </div>
            </AccordionRow>
          ))}
        </div>
      </div>
    )
  },
}

export const ColumnSwitcherDemo = {
  render: () => {
    const [showColumns, setShowColumns] = useState(false)
    const [columns, setColumns] = useState(columnSwitchers)
    
    const toggleColumn = (id: string) => {
      setColumns(prev => prev.map(col => 
        col.id === id ? { ...col, enabled: !col.enabled } : col
      ))
    }
    
    const showAllColumns = () => {
      setColumns(prev => prev.map(col => ({ ...col, enabled: true })))
    }
    
    return (
      <div className="w-full max-w-4xl">
        <div className="mb-4">
          <button
            onClick={() => setShowColumns(true)}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Show Column Switcher
          </button>
        </div>
        
        <div className="bg-white border border-light-3-tint rounded-lg overflow-hidden">
          <SortBar>
            {sortItems.map((item, index) => (
              <Sort
                key={item.id}
                item={item}
                onClick={() => console.log('Sort clicked:', item.id)}
                withSeparator={index < sortItems.length - 1}
              />
            ))}
          </SortBar>
          
          {sampleData.map((row) => (
            <Row
              key={row.id}
              tableGrid={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
            >
              {columns.find(c => c.id === 'name')?.enabled && <Cell>{row.name}</Cell>}
              {columns.find(c => c.id === 'email')?.enabled && <Cell>{row.email}</Cell>}
              {columns.find(c => c.id === 'status')?.enabled && (
                <Cell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    row.status === 'Active' ? 'bg-green-100 text-green-800' :
                    row.status === 'Inactive' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {row.status}
                  </span>
                </Cell>
              )}
              {columns.find(c => c.id === 'role')?.enabled && <Cell>{row.role}</Cell>}
            </Row>
          ))}
        </div>
        
        {showColumns && (
          <ColumnsView
            onCloseClick={() => setShowColumns(false)}
            onShowAllClick={showAllColumns}
          >
            {columns.map((column) => (
              <ColumnSwitcher
                key={column.id}
                label={column.label}
                enabled={column.enabled}
                onChange={() => toggleColumn(column.id)}
              />
            ))}
          </ColumnsView>
        )}
      </div>
    )
  },
}
