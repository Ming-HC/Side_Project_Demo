# My Side Project
  <h1>動態網站作品:</h1>
    <p><a href="https://forum-demo-qy2ufzf3yq-de.a.run.app">討論區</a></p>
    <p>提供測試會員供登入使用，使用者名稱：testuser，密碼：testuser。也可自行註冊，請勿使用真實資料！</p>
    <pre>
    網站架構：
      前端：Html, Css, Bootstrap, JavaScript, jQuery
      後端：Node.js, MySQL, GCP
      後端框架：Node.js Express
      串接API：Google登入API</pre>
    <p>功能說明：網站會員註冊登入，討論區文章增查修刪/分類/分頁(20筆/頁)/瀏覽數/回覆數/最新回覆</p>
    <span>前端：</span>
    <ul>
      <li>會員註冊使用正則表達式偵測輸入的內容</li>
      <li>會員註冊登入前端送出前將密碼使用base64加密再送出</li>
      <li>上傳圖片即使顯示</li>
      <li>討論區上傳多張來源路徑不同的圖片</li>
    </ul>
    <span>後端：</span>
    <ul>
      <li>使用Node.js ejs於渲染前端網頁</li>
      <li>使用Node.js session於會員登入功能</li>
      <li>使用Node.js crypto於會員密碼/Google token，加密後儲存進資料庫</li>
      <li>使用Node.js multer於網站上傳圖片</li>
      <li>使用Node.js fs於延伸上傳圖片自定義名稱</li>
      <li>使用Node.js express.Router分割server.js檔方便管理</li>
      <li>部分api url使用正則表達式處理</li>
    </ul>
    <p>階段計畫：目前網站架構使用後端渲染網頁改為使用前端框架React，預計花費1~2周。</p>
    <p>此作品為於台中資展國際前端工程師班的結訓團體專題，將個人負責部分的網站會員註冊登入和討論區部署於GCP，做持續維護及延伸。</p>
  <br />
  <br />
  <h1>靜態網頁作品:</h1>
    <h3>電商網站練習: </h3>
    <p><a href="https://ming-hc.github.io/Side_Project_Demo/MFEE35_StaticProject/">My_StaticProject</a></p>
  <hr />
  <h3>資料、圖片來源：</h3>
  <ul>
    <li><a href="https://24h.pchome.com.tw/">PChome 24h購物</a></li>
    <li><a href="https://www.w3schools.com/">W3School</a></li>
  </ul>
