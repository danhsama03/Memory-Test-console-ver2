import { question } from "readline-sync";

/**
 * Hàm in ra thông tin người dùng
 * @param ten Tên của người dùng
 * @param namSinh Năm sinh của người dùng  
 */
function xinChao(ten: string, namSinh: number): void {
    console.log("Xin chào, mình tên là " + ten + ".");
    console.log("Mình sinh năm " + namSinh + ".");
    console.log("Rất vui được gặp bạn.");
};

xinChao('Kmin', 2016)
xinChao('Bao', 2003)

export {}