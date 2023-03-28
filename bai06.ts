import { question } from "readline-sync";

/**
 * Hàm chuyển đổi độ F thành độ C và trả về độ C
 * @param doF Độ F để chuyển đổi
 * @returns Độ C
 */
function chuyenDoC(doF: number,): number {
    let doC: number = 5/9*(doF-32);
    console.log("Do C la " + doC);
    return doC;
}

/**
 * Hàm chức năng nhập độ F và chuyển thành độ C
 */
function cnChuyenDoC(): void {
    let f: number = Number(question("Nhap do F: "));
    let doF: number = f;
    chuyenDoC(doF);
}

cnChuyenDoC();