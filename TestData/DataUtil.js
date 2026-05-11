const exceljs = require("exceljs")

let obj = {}

async function ExcelData() {

    //Connected to Workbook
    const WorkBook = new exceljs.Workbook();
    await WorkBook.xlsx.readFile("C:/Users/umama/OneDrive/Desktop/SuperTest.xlsx")
    //Connect a worksheet in this workbok
    const WorkSheet =await WorkBook.getWorksheet("Sheet1")

    const NoofRows = await WorkSheet.actualRowCount
    const NoofColumns = await WorkSheet.actualColumnCount

    console.log(getcelldata.value);
    console.log(NoofRows);
    console.log(NoofColumns);

    for(let i=1;i<=NoofColumns;i++){
        let key = await WorkSheet.getCell(1,i).value
        let value = await WorkSheet.getCell(2,i).value

        obj[`${key}`] = value
    }

return obj

}