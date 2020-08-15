export class Config {

    static readonly subject = 'Subject';
    static readonly scheduleType = 'Type';
    static readonly jobOrder = 'JobOrder';
    static readonly jobOrders = 'JobOrders';
    static readonly recruiters = 'Recruiters';
    static readonly recruiter = 'Recruiter';
    static readonly note = 'Note';
    static readonly candidates = 'Candidates';
    static readonly clientName = 'ClientName';
    static readonly contacts = 'Contacts';
    static readonly contactName = 'ContactName';

    static readonly initialActivityToDateGridConfig = {
        pageIndex: 0,
        pageSize: 10,
        allowedPageSizes: [10, 25, 50],
        gridColumns: [],
        filterEnabled: true,
        isShowColumnChooser: true
    };
}
