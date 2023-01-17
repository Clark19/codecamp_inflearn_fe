import { MainLayout } from "../../../styles/emotion"

export default function BoardWirterUI() {
  return (
    <MainLayout>
      <h1>게시물 등록</h1>
      <div>작성자<input type="text" name="작성자" id="" />비밀번호<input type="text" name="비밀번호" id="" /></div>
      
      <input type="text" name="제목" id="" />
      <input type="text" name="내용" id="" />
      주소: <input type="text" name="주소" id="" />
      <button>등록하기</button>

    </MainLayout>
  )
}