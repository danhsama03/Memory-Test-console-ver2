import { question } from "readline-sync";

/**
 * Hàm so sánh a với b
 * @param a Số a để so sánh
 * @param b Số b để so sánh
 */
function soSanh(a: number, b: number): void {
    if (a == b) {
        console.log("Bang");
    } else if (a > b) {
        console.log("Lon");
    } else {
        console.log("Nho");
    }
};

/**
 * Hàm chức năng nhập số a và b để so sánh
 */
function cnSoSanh(): void {
    let a: number = Number(question("Nhap so a: "));
    let b: number = Number(question("Nhap so b: "));
    soSanh(a, b);
}

cnSoSanh();