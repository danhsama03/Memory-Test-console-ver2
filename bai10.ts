import { question } from "readline-sync";

/**
 * Hàm liệt kê số nguyên tố trong khoảng m, n
 * @param m Khoảng bắt đầu để liệt kê số nguyên tố
 * @param n Khoảng kết thúc để liệt kê số nguyên tố
 */
function LietKeSoNguyenTo(m: number, n: number): void {
    if (m <= 5) {
        for (let i: number = m; i <= 5; i++) {
            if (i > 2 && i % 2 != 0) {
                console.log(i);
            };
        };
        for (let i: number = m; i <= n - 1; i++) {
            if (i > 2 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
                console.log(i);
            };
        };
    } else {
        for (let i: number = m; i <= n - 1; i++) {
            if (i > 2 && i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
                console.log(i);
            };
        };
    };
};

/**
 * Hàm chức năng nhập khoảng m, n và liệt kê số nguyên tố trong khoảng m, n
 */
function cnLietKeSoNguyenTo(): void {
    let m: number = Number(question("Nhap m: "));
    let n: number = Number(question("Nhap n: "));
    LietKeSoNguyenTo(m, n);
};

cnLietKeSoNguyenTo();