export interface ICatalogModel{
    id: string;
    name: string;
    catagory: string;
    summary:  string;
    description: string;
    imgeFile: string;
    price: number;
}

export interface ICatalogsModel{
    totalRecord: number;
    catalogs: ICatalogModel[]
}
