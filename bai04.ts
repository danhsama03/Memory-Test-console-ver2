import { question } from "readline-sync";

/**
 * Hàm in ra thông tin và trả về tuổi
 * @param ten Tên của người dùng
 * @param namSinh Năm sinh của người dùng
 * @returns Tuổi của người dùng
 */
function xinChao(ten: string, namSinh: number): number {
    console.log("Xin chào, mình tên là " + ten + ".");
    console.log("Mình sinh năm " + namSinh + ".");
    console.log("Rất vui được gặp bạn.");
    const tuoi: number = 2023 - namSinh;
	console.log(tuoi);
    return tuoi;
};

/**
 * Hàm chức năng nhập tên, năm sinh và in ra thông tin
 */
function cnXinChao(): void {
	let ten: string = question("Nhap ten: ");
	let namSinh: number = Number(question("Nhap nam sinh: "));
	xinChao(ten, namSinh);
}

cnXinChao();

export {}