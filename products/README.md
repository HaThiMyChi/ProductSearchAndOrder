1. Mục tiêu & phạm vi

Bạn cần làm 1 trang SPA (1 screen) có 3 khối chính:

Product List: hiển thị danh sách sản phẩm từ JSON local.

Search & Filter: lọc theo name và category.

Order Summary / Cart: chọn sản phẩm bằng cách set quantity (0–99), hiển thị items đã chọn + subtotal + tổng.

Responsive:

Mobile: 1 cột; cart nằm dưới hoặc mở bằng button/drawer.

Desktop: 2 cột; product list bên trái + cart summary bên phải.

2. Dữ liệu đầu vào (sample JSON)

Bạn có 4 fields quan trọng:

id: number (key)

name: string (dùng search)

price: number (tính subtotal, total)

category: string (filter)

isPrescription: boolean (hiển thị badge “Rx”)

✅ Việc cần làm:

Tạo products.ts hoặc products.json

Tạo type Product

3. Functional requirements chi tiết → bạn phải implement gì?
   A. Product List (bắt buộc)

Mỗi item/row cần:

Tên sản phẩm

Category

Price (format VND cho đẹp, nhưng không bắt buộc)

Badge “Rx” nếu isPrescription === true

Khu vực chỉnh quantity (0–99)

Quantity control:

Có thể là - + và input number

Hoặc input stepper (miễn có giới hạn 0–99 và dễ dùng)

✅ Điều quan trọng:

Quantity = 0 nghĩa là không vào cart / remove khỏi cart.

B. Search & Filter (bắt buộc)

Search bar: filter theo name (thường case-insensitive).

Category filter: dropdown/chips đều ok.

✅ Edge cases:

Search + category filter chạy cùng lúc.

Có option “All categories”.

C. Order Summary / Cart (bắt buộc)

Ở panel/bottom section hiển thị:

Danh sách SKU đã chọn (quantity > 0)

Mỗi dòng: name + quantity + subtotal (price \* qty)

Grand total

✅ Nên có:

Nút clear cart hoặc set qty về 0 (không bắt buộc, nhưng UX tốt)

Nếu cart rỗng: hiển thị empty state (“No items selected”)

4. UX & Error handling (bắt buộc)

Bạn cần xử lý các tình huống sau:

Empty results (bắt buộc)

Khi search/filter không ra sản phẩm:

Hiển thị message: “No products found”

Có thể có nút “Clear filters”

Interaction feedback (bắt buộc)

Yêu cầu ghi: “disabled buttons, loading if simulate API call”.

Gợi ý implement đúng ý đề:

Giả lập loading khi “fetch products”: setTimeout(300-800ms) rồi hiển thị list.

Disable - khi qty = 0

Disable + khi qty = 99

Disable input ngoài range (hoặc clamp về 0–99)

Nếu đang loading: show skeleton/spinner

5. Responsive UI (bắt buộc)
   Desktop (>= md)

Layout 2 cột:

Left: Search + filter + product list

Right: Cart summary sticky (điểm cộng lớn)

Mobile (< md)

1 cột:

Product list full width

Cart:

Option A: nằm cuối trang (bottom section)

Option B (đẹp hơn): nút “Cart (x items)” mở bottom sheet/drawer

✅ Responsive decision notes (để ghi README):

Dùng CSS grid/flex + breakpoint

Cart sticky chỉ bật trên desktop

6. State management cần có (để bạn chuẩn bị code đúng)

Bạn có 3 nhóm state:

UI state

searchText

selectedCategory

isCartOpen (mobile drawer) (nếu dùng)

Data state

products

loading (simulate fetch)

error (optional, nhưng có thì điểm cộng)

Cart state

quantities theo productId (vd: {[id]: number})

Derived:

cartItems = products.filter(qty>0)

subtotal, total

✅ Gợi ý cách làm “sạch”:

Lưu cart là Record<number, number> hoặc Map<number, number>

Tính toán filteredProducts, cartItems, total bằng useMemo

7. Component structure đề xuất (đúng chuẩn bài test)

Bạn có thể chia như sau:

App (layout + state)

ProductToolbar

SearchInput

CategoryFilter

ProductList

ProductRow (badge Rx + qty controls)

CartSummary

CartItemRow

TotalRow

CartDrawer (mobile) (optional nhưng đẹp)

Thư mục:

src/data/products.ts

src/types/product.ts

src/utils/format.ts (format price)

src/components/...

8. README cần có (deliverable)

Trong README, bạn phải viết ngắn nhưng đủ 3 ý:

How to run

npm i

npm run dev

State management

dùng React state + derived values (useMemo)

cart state dạng map/record

Component structure

giải thích các component chính và trách nhiệm

Responsive design decisions

breakpoint nào, cart nằm đâu trên mobile/desktop, sticky/drawer…

9. Checklist “đạt yêu cầu” (để tự tick)

Load products từ local JSON/in-code

Hiển thị name/category/price + Rx badge

Search theo name

Filter theo category + All

Quantity 0–99, cập nhật cart theo qty

Cart: list items + subtotal + total

Empty state cho product list (no results)

Empty state cho cart

Loading state giả lập

Mobile 1 cột + cart bottom/drawer

Desktop 2 cột + cart side panel

products.json

[
{ "id": 1, "name": "Paracetamol 500mg", "price": 15000, "category": "Pain Relief", "isPrescription": false },
{ "id": 2, "name": "Amoxicillin 500mg", "price": 45000, "category": "Antibiotic", "isPrescription": true },
{ "id": 3, "name": "Vitamin C 1000mg", "price": 30000, "category": "Supplement", "isPrescription": false },
{ "id": 4, "name": "Cetirizine 10mg", "price": 20000, "category": "Allergy", "isPrescription": false }
]
