import { Link } from "react-router-dom";

const Mypage = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        <p>新規登録は<Link to="/register">こちら</Link></p>
        <p>ログインは<Link to="/login">こちら</Link></p>
        <p><Link to="/top">top</Link></p>
        
      </div>
    </>
  );
};

export default Mypage;
