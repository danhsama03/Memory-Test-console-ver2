import { question } from "readline-sync";

/**
 * Hàm kiểm trả có phải tam giác đều
 * @param a Cạnh a của tam giác
 * @param b Cạnh b của tam giác
 * @param c Cạnh c của tam giác
 */
function kiemTraTamGiacDeu(a: number, b: number, c: number): void {
    if (a == b || b == c || a == c) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};

/**
 * Hàm chức năng nhập cạnh a, b, c và kiểm tra có phải tam giác đều
 */
function cnKiemTraTamGiacDeu(): void {
    let a: number = Number(question("Nhap canh a: "));
    let b: number = Number(question("Nhap canh b: "));
    let c: number = Number(question("Nhap canh c: "));
    kiemTraTamGiacDeu(a, b, c);
}

cnKiemTraTamGiacDeu();