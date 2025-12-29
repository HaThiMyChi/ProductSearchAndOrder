export function formatVND(value: number) {
  // 45.000đ
  return `${new Intl.NumberFormat("vi-VN").format(value)} đ`;
}
