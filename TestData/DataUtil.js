import path from "node:path";

const exceljs = require("exceljs")

let obj = {}

export async function ExcelData() {
const excelpath = path.join(__dirname, "TestData", "SuperTest.xlsx")
    //Connected to Workbook
    const WorkBook = new exceljs.Workbook();
    await WorkBook.xlsx.readFile(excelpath)
    //Connect a worksheet in this workbok
    const WorkSheet =await WorkBook.getWorksheet("Sheet1")

    const NoofRows = await WorkSheet.actualRowCount
    const NoofColumns = await WorkSheet.actualColumnCount

    for(let i=1;i<=NoofColumns;i++){
        let key = await WorkSheet.getCell(1,i).text
        let value = await WorkSheet.getCell(2,i).text

        obj[`${key}`] = value
    }

return obj

}

