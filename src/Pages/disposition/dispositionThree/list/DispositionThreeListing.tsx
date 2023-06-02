import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/redux/store'
import {
    setRowsPerPage,
    setPage,
    setSearchValue,
} from 'src/redux/slices/configuration/dispositionThreeSlice'
import ATMBreadCrumbs, {
    BreadcrumbType,
} from 'src/components/UI/atoms/ATMBreadCrumbs/ATMBreadCrumbs'
import ATMPagination from 'src/components/UI/atoms/ATMPagination/ATMPagination'
import ATMTable from 'src/components/UI/atoms/ATMTable/ATMTable'
import ATMTableHeader from 'src/components/UI/atoms/ATMTableHeader/ATMTableHeader'
import ATMPageHeading from 'src/components/UI/atoms/ATMPageHeading/ATMPageHeading'
import { useNavigate } from 'react-router-dom'

type Props = {
    columns: any[]
    rows: any[]
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const DispositionThreeListing = ({ columns, rows, setShowDropdown }: Props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const dispositionThreeState: any = useSelector(
        (state: RootState) => state.dispositionThree
    )
    const [selectedRows, setSelectedRows] = useState([])
    const { page, rowsPerPage, totalItems, searchValue } = dispositionThreeState
    const breadcrumbs: BreadcrumbType[] = [
        {
            label: 'Disposition',
            path: '/dispositions/disposition-three',
        },
        {
            label: 'Disposition Three',
        },
    ]

    return (
        <>
            <div className="px-4 h-full overflow-auto pt-3 ">
                <div className="h-[30px]">
                    <ATMBreadCrumbs breadcrumbs={breadcrumbs} />
                </div>
                {/* Page Header */}
                <div className="flex justify-between items-center h-[45px]">
                    <ATMPageHeading> Disposition Three </ATMPageHeading>
                    <button
                        type="button"
                        onClick={() => navigate('add')}
                        className="bg-primary-main text-white rounded py-1 px-3"
                    >
                        + Add
                    </button>
                </div>

                <div className="border flex flex-col h-[calc(100%-75px)] rounded bg-white">
                    {/*Table Header */}
                    <ATMTableHeader
                        searchValue={searchValue}
                        page={page}
                        rowCount={totalItems}
                        rowsPerPage={rowsPerPage}
                        rows={rows}
                        onRowsPerPageChange={(newValue) =>
                            dispatch(setRowsPerPage(newValue))
                        }
                        onSearch={(newValue) => {
                            dispatch(setSearchValue(newValue))
                        }}
                        isFilter
                    />

                    {/* Table */}
                    <div className="grow overflow-auto  ">
                        <ATMTable
                            columns={columns}
                            rows={rows}
                            isCheckbox={true}
                            selectedRows={selectedRows}
                            onRowSelect={(selectedRows) =>
                                setSelectedRows(selectedRows)
                            }
                            setShowDropdown={setShowDropdown}
                            extraClasses="h-full overflow-auto"
                        />
                    </div>

                    {/* Pagination */}

                    <div className="h-[90px] flex items-center justify-end border-t border-slate-300">
                        <ATMPagination
                            page={page}
                            rowCount={totalItems}
                            rows={rows}
                            rowsPerPage={rowsPerPage}
                            onPageChange={(newPage) =>
                                dispatch(setPage(newPage))
                            }
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DispositionThreeListing