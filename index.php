<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <title>A/Bテスト信頼度判定ツール</title>
</head>
<body>
  <header>
    <h1>A/Bテスト信頼度判定ツール</h1>
    <div>
      <a href="show.php">
        <button class="btn" id="how-to-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
          <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/>
          <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"/>
        </svg>
          A/Bテスト信頼度判定ツールの使い方
        </button>
      </a> 
    </div>
  </header>
  <main>
    <div id="table-wrapper">
      <table class="table table-bordered border-danger-subtle">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">クリック数</th>
            <th scope="col">誘導数</th>
            <th scope="col">コンバージョン率</th>
            <th scope="col">信頼度</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="id" scope="row">A</th>
            <td>
              <input class="clicks form-control" type="text">
            </td>
            <td>
              <input class="conversions form-control" type="text">
            </td>
            <td class="conversion-rate"></td>
            <td class="confident"></td>
          </tr>
          <tr>
            <th class="id" scope="row">B</th>
            <td>
              <input class="clicks form-control" type="text">
            </td>
            <td>
              <input class="conversions form-control" type="text">
            </td>
            <td class="conversion-rate"></td>
            <td class="confident"></td>
          </tr>
        </tbody>
      </table>
      <div id="bottom-parts">
        <div id="calculating">
          <button id="calculate-btn" class="btns" onclick="calculateConversionRate()">計算する</button>
        </div>
        <div id="csv">
          <input type="button" id="download" value="CSVファイルでダウンロード" class="btns download">
        </div>
        <div id="add-del">
          <input type="button" value="＋" id="add" class="btns">
          <input type="button" value="－" id="del" class="btns">
        </div>
      </div>
      <div id="result">
        <span id="result-title">結果</span>
        <p id="message"></p>
      </div>
    </div>
  </main>
  <footer>
    <p><span id="copyright">©</span>2024 A/Bテスト信頼度判定ツール</p>
  </footer>
  <script src="main.js"></script>
</body>
</html>