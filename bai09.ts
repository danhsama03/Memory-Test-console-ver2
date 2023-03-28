import { question } from "readline-sync";

/**
 * Hàm kiểm tra số nguyên tố
 * @param n Số để kiểm tra có phải là số nguyên tố
 */
function kiemTraSoNguyenTo(n: number): void {
    let flag: boolean = true;
    if (n < 2) {
        flag = false;
    } else {
        for (let i: number = 2; i <= n - 1; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    };

    if (flag == true) {
        console.log("Yes");
    } else {
        console.log("No");
    };
};

/**
 * Hàm chức năng nhập số nguyên để kiểm tra có phải số nguyên tố
 */
function cnKiemTraSoNguyenTo(): void {
    let n: number = Number(question("Nhap so n: "));
    kiemTraSoNguyenTo(n);
}

cnKiemTraSoNguyenTo();