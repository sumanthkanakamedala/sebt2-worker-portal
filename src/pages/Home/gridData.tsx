
// import Chip from 'eworldes-ui-toolkit';
// import { GridCellParams, GridRowsProp, GridColDef } from 'eworldes-ui-toolkit';

export const columns: any[] = [
    { field: 'ApplicationID', headerName: 'ApplicationID', flex: 1.5, minWidth: 200 },
    {
        field: 'ApplicationName',
        headerName: 'Application Name',
        flex: 1,
        minWidth: 80
        //renderCell: (params: any) => renderStatus(params.value as any),
    },
    {
        field: 'ApplicationNum',
        headerName: 'Application No',
        headerAlign: 'right',
        align: 'right',
        flex: 1,
        minWidth: 80,
    },
    {
        field: 'Source',
        headerName: 'Source',
        headerAlign: 'right',
        align: 'right',
        flex: 1,
        minWidth: 100,
    },
    {
        field: 'NoOfStudents',
        headerName: 'No of Students',
        headerAlign: 'right',
        align: 'right',
        flex: 1,
        minWidth: 120,
    },
    {
        field: 'DateSubmitted',
        headerName: 'Date Submitted',
        headerAlign: 'right',
        align: 'right',
        flex: 1,
        minWidth: 100,
    }
];

export const rows: any = [
    {
        id: 1,
        ApplicationID:'111',
        ApplicationName: 'Rubisela Orozco',
        ApplicationNum:"Test",
        Source:"Test",
        NoOfStudents:5,
        DateSubmitted:"2021-09-01"
    },
    {
        id: 2,
        ApplicationID:'222',
        ApplicationName: 'Rubisela Orozco',
        ApplicationNum:"Test",
        Source:"Test",
        NoOfStudents:5,
        DateSubmitted:"2021-09-01"
    },
     {
        id: 3,
        ApplicationID:'333',
        ApplicationName: 'Rubisela Orozco',
        ApplicationNum:"Test",
        Source:"Test",
        NoOfStudents:5,
        DateSubmitted:"2021-09-01"
    }, {
        id: 4,
        ApplicationID:'444',
        ApplicationName: 'Rubisela Orozco',
        ApplicationNum:"Test",
        Source:"Test",
        NoOfStudents:5,
        DateSubmitted:"2021-09-01"
    },
];