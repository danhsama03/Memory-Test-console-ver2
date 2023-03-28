import { question } from "readline-sync";

/**
 * In ra lời chào và trả về tuổi
 * @param ten Tên của người dùng
 * @param namSinh Tuổi của người dùng
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
 * Lấy tên từ bàn phím
 * @returns Tên hợp lệ
 */
function nhapTen(): string {
    let ten: string = "";
    do {
        ten = question("Nhap ten: ");
    } while (ten == "");
	return ten;
};

/**
 * Lấy năm sinh từ bàn phím
 * @returns Năm sinh hợp lệ
 */
function nhapNamSinh(): number {
	let namSinh: number = 0;
    do {
        namSinh = Number(question("Nhap nam sinh: "));
    } while (namSinh <= 0 || namSinh >= 2024);
	return namSinh;
};

/**
 * Hàm chức năng nhập tên, tuổi và in thông tin người dùng
 */
function cnXinChao(): void {
	let ten: string = nhapTen();
    let namSinh: number = nhapNamSinh();
	xinChao(ten, namSinh);
};

cnXinChao();

export {}