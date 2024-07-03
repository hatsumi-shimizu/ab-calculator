<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  <title>A/Bテスト信頼度判定ツールの使い方</title>
</head>
<body>
  <header id="show-header">
    <h1 id="show-heading">A/Bテスト信頼度判定ツールの使い方</h1>
  </header>
  <main id="show-main-wrapper">
    <div id="show-main-container">
      <div class="txt">
        <h3 id="heading-except">
          <svg class="svg-heading" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
          </svg>
          概要
        </h3>
        <ul>
          <li class="explanation">A/Bテストを簡易的に行うことができるツール</li>
          <li class="explanation">クリック数と誘導数を入力すると各サイトのコンバージョン率を求めることができる</li>
          <li class="explanation">各サイトのコンバージョン率をもとに信頼度を比較できる</li>
        </ul>
      </div>
      <div class="txt">
        <h3>
          <svg class="svg-heading" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
          </svg>
          使い方
        </h3>
        <ul>
          <li class="explanation">行1のクリック数と誘導数を入力する</li>
          <li class="explanation">行2のクリック数と誘導数を入力する</li>
          <li class="explanation">「計算する」ボタンを押すと結果が表示される</li>
        </ul>
      </div>
      <div class="txt">
        <h3>
          <svg class="svg-heading" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
            <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
          </svg>
          入力行の増減
        </h3>
        <ul>
          <li class="explanation">入力行を増やすときは「+」ボタンを押す</li>
          <li class="explanation">入力行を減らすときは「−」ボタンを押す</li>
        </ul>
        <div class="txt">
          <h3 id="massage-heading">
            <svg class="svg-heading" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
            </svg>
            メッセージの意味
          </h3>
          <div id="show-table-wrapper" class="show-table-wrapper">
            <table class="table table-bordered border-danger-subtle">
              <tbody>
                <tr>
                  <th class="id" scope="row">99% confident</th>
                  <td class="meaning">99%以上の信頼度で有意な差である</td>
                </tr>
                <tr>
                  <th class="id" scope="row">95% confident</th>
                  <td class="meaning">95%以上の信頼度で有意な差である</td>
                </tr>
                <tr>
                  <th class="id" scope="row">90% confident</th>
                  <td class="meaning">90%以上の信頼度で低い<br>傾向は出ているが差が出ているとは言えない</td>
                </tr>
                <tr>
                  <th class="id" scope="row">80% confident</th>
                  <td class="meaning">80%以上の信頼度で低い<br>差が出ているとは言えない</td>
                </tr>
                <tr>
                  <th class="id" scope="row">-</th>
                  <td class="meaning">信頼度は80%以下<br>差や傾向は出ていない</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <p id="show-footer"><span id="copyright">©</span>2024 A/Bテスト信頼度判定ツール</p>
  </footer>
</body>
</html>