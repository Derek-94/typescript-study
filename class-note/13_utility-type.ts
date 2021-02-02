interface Product {
    id: number,
    price: number,
    name: string,
    brand: string,
    stock: number
}

// 1. 상품 목록을 가져오기 위한 API
// 화면에 뿌리기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ..
}

// 이렇게 interface를 또 정의해서 쓸수 있지만, 이는 코드가 중복되고.. 어떻게 재활용 못할까?
interface ProductDetail {
    id: number,
    price: number,
    name: string,
}
// -> 유틸리티 타입을 쓰자!

// 2. 특정  상품의 상세 정보를 나타내기 위한 함수.
function displayProductDetail(shoppingItem: Pick<Product, "id" | "name" | "price">) {

}

// 아랫줄을 preview 하면 눈에 잘 보여서 쓴 구문.
type shoppingItem = Pick<Product, "id" | "name" | "price"> 

// Product interface에서 optional 하게 선택하고 싶다.
// 이렇게 할 수도 있지!
interface UpdateProduct {
    id?: number,
    price?: number,
    name?: string,
    brand?: string,
    stock?: number
}
// 하지만 코드 중복 심하다.-> Partial 을 쓰자.

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수.
function updateProductItem(updadteProduct: Partial<Product>) {

}

// 아랫줄은 preview 로 잘 보려고 쓰인 구문.
type updateProductPreview = Partial<Product>


// 4. Utility type 구현하기 - Partial를 한번 구현해보자!
interface UserProfile {
    username: string,
    email: string,
    profilePhotoUrl: string;
}

// # 1번째 방법 - 이미 정의 되어있는 것을 최대한 활용.
type UserProfileUpdate = {
    username?: UserProfile["username"],
    email?: UserProfile["email"],
    profilePhotoUrl?: UserProfile["profilePhotoUrl"];
}

// # 2번째 방법 - Mapped Type! - 1번째 방법을 좀 더 간결하게.
type UserProfileUpdate2 = {
    [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
}

// # 3 
type userProfileKeys = keyof UserProfile;

type UserProfileUpdate3 = {
    [p in keyof UserProfile]?: UserProfile[p];
}

// # 4 Partial 의 진짜 형태.
type Subset<T> = {
    [p in keyof T]?: T[p];
}