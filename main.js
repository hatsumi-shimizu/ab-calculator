// 行の追加
var rowCount = 2; // 最初のレコード数
$(document).on("click", "#add", function() {
  var table = $("table tbody");
  var newRowA = table.find("tr:first").clone(true); // 最初の行をコピー
  var newRowB = table.find("tr:last").clone(true); // 最後の行をコピー
  rowCount++;
  newRowA.find("th").text('A'); // 行番号を更新
  newRowB.find("th").text('B'); // 行番号を更新
  newRowA.find(".clicks").val(""); // クリック数の入力フィールドをクリア
  newRowB.find(".clicks").val(""); // クリック数の入力フィールドをクリア
  newRowA.find(".conversions").val(""); // コンバージョン数の入力フィールドをクリア
  newRowB.find(".conversions").val(""); // コンバージョン数の入力フィールドをクリア
  newRowA.find(".conversion-rate").text(""); // コンバージョン率をクリア
  newRowB.find(".conversion-rate").text(""); // コンバージョン率をクリア
  newRowA.find(".confident").text(""); // 信頼度をクリア
  newRowB.find(".confident").text(""); // 信頼度をクリア
  newRowA.find("#message").text(""); // バリデーションメッセージをクリア
  newRowB.find("#message").text(""); // バリデーションメッセージをクリア
  table.append(newRowA);
  table.append(newRowB);
});

// 行の削除
$(document).on("click", "#del", function() {
  var table = $("table tbody");
  if (table.find("tr").length > 2) { // 最低2つのレコードが必要
    table.find("tr:last").remove(); // 最後の行を削除
    table.find("tr:last").remove(); // 最後の行を削除
    rowCount--;
  }
});


// function calculateConversionRate() {
//   const rows = document.querySelectorAll('tbody tr'); // 全ての行を選択
//   const clicks = [];
//   const conversions = [];
//   const conversionRates = [];
//   const messageElement = document.getElementById('message'); // メッセージ表示用の要素を取得

//   // データを取得
//   rows.forEach(row => {
//     clicks.push(parseFloat(row.querySelector('.clicks').value));
//     conversions.push(parseFloat(row.querySelector('.conversions').value));
//   });

//   // 新しく追加されたレコードのデータ
//   const newClicks = clicks.slice(-2); // 最後の2つの要素を取得
//   const newConversions = conversions.slice(-2); // 最後の2つの要素を取得

//   // コンバージョン率を計算
//   const newConversionRates = newClicks.map((click, index) => {
//     return (newConversions[index] / click) * 100;
//   });

//   // コンバージョン率をHTMLに表示
//   newConversionRates.forEach((rate, index) => {
//     const conversionRateElement = rows[rows.length - 2 + index].querySelector('.conversion-rate');
//     conversionRateElement.textContent = rate.toFixed(2) + '%';
//   });

//   // 信頼度を判定
//   let confidentValueWinner = '-';
//   let confidentValueLoser = '-';
//   let message = '';

//   const diff = Math.abs(newConversionRates[0] - newConversionRates[1]);

//   if (diff >= 14.00) {
//     confidentValueWinner = "99% confident";
//     message = "99%以上の信頼度で有意な差です。";
//   } else if (diff >= 10.00) {
//     confidentValueWinner = "95% confident";
//     message = "95%以上の信頼度で有意な差です。";
//   } else if (diff >= 9.00) {
//     confidentValueWinner = "90% condfident";
//     message = "信頼度は90%以上で差が出ているとは言えません。";
//   } else if (diff >= 7.00) {
//     confidentValueWinner = "80% confident";
//     message = "80%以上の信頼度で低い。差が出ているとは言えません。";
//   } else {
//     message = "信頼度は80%未満。差や傾向は出ていません。";
//   }
  
//   // 信頼度をHTMLに表示
//   const winnerIndex = newConversionRates[0] > newConversionRates[1] ? 0 : 1;
//   const loserIndex = 1 - winnerIndex; // 勝者と敗者のインデックスを切り替える
//   const winnerConfidentElement = rows[rows.length - 2 + winnerIndex].querySelector('.confident');
//   const loserConfidentElement = rows[rows.length - 2 + loserIndex].querySelector('.confident');
//   winnerConfidentElement.textContent = confidentValueWinner;
//   loserConfidentElement.textContent = '-';

//   // メッセージを表示
//   if (message.includes("有意な差です。")) {
//     const winner = winnerIndex === 0 ? 'A' : 'B';
//     message += ` ${winner}が勝者です。`;
//   }

//   // メッセージを表示
//   messageElement.textContent = message;
// }

function calculateConversionRate() {
  const rows = document.querySelectorAll('tbody tr'); // 全ての行を選択
  const clicks = [];
  const conversions = [];
  const conversionRates = [];
  const messageElement = document.getElementById('message'); // メッセージ表示用の要素を取得

  // データを取得
  rows.forEach(row => {
    clicks.push(parseFloat(row.querySelector('.clicks').value));
    conversions.push(parseFloat(row.querySelector('.conversions').value));
  });

  // 新しく追加されたレコードのデータ
  const newClicks = clicks.slice(-2); // 最後の2つの要素を取得
  const newConversions = conversions.slice(-2); // 最後の2つの要素を取得

  // コンバージョン率を計算
  const newConversionRates = newClicks.map((click, index) => {
    return (newConversions[index] / click) * 100;
  });

  // コンバージョン率をHTMLに表示
  newConversionRates.forEach((rate, index) => {
    const conversionRateElement = rows[rows.length - 2 + index].querySelector('.conversion-rate');
    conversionRateElement.textContent = rate.toFixed(2) + '%';
  });

  // 信頼度を判定
  const p1 = newConversions[0] / newClicks[0];
  const p2 = newConversions[1] / newClicks[1];
  const n1 = newClicks[0];
  const n2 = newClicks[1];
  const p = (newConversions[0] + newConversions[1]) / (newClicks[0] + newClicks[1]);

  const z = (p1 - p2) / Math.sqrt(p * (1 - p) * (1 / n1 + 1 / n2));
  const pValue = 1 - cumulativeStandardNormalDistribution(Math.abs(z));

  let confidentValueWinner = '-';
  let message = '';

  if (pValue < 0.01) {
    confidentValueWinner = "99% confident";
    message = "99%以上の信頼度で有意な差です。";
  } else if (pValue < 0.05) {
    confidentValueWinner = "95% confident";
    message = "95%以上の信頼度で有意な差です。";
  } else if (pValue < 0.10) {
    confidentValueWinner = "90% confident";
    message = "信頼度は90%以上で差が出ているとは言えません。";
  } else if (pValue < 0.20) {
    confidentValueWinner = "80% confident";
    message = "80%以上の信頼度で低い。差が出ているとは言えません。";
  } else {
    message = "信頼度は80%未満。差や傾向は出ていません。";
  }

  // 信頼度をHTMLに表示
  const winnerIndex = newConversionRates[0] > newConversionRates[1] ? 0 : 1;
  const loserIndex = 1 - winnerIndex; // 勝者と敗者のインデックスを切り替える
  const winnerConfidentElement = rows[rows.length - 2 + winnerIndex].querySelector('.confident');
  const loserConfidentElement = rows[rows.length - 2 + loserIndex].querySelector('.confident');
  winnerConfidentElement.textContent = confidentValueWinner;
  loserConfidentElement.textContent = '-';

  // メッセージを表示
  if (message.includes("有意な差です。")) {
    const winner = winnerIndex === 0 ? 'A' : 'B';
    message += ` ${winner}が勝者です。`;
  }

  // メッセージを表示
  messageElement.textContent = message;
}

// 標準正規分布の累積分布関数
function cumulativeStandardNormalDistribution(z) {
  const b1 = 0.31938153;
  const b2 = -0.356563782;
  const b3 = 1.781477937;
  const b4 = -1.821255978;
  const b5 = 1.330274429;
  const p = 0.2316419;
  const c2 = 0.3989423;

  if (z >= 0.0) {
    const t = 1.0 / (1.0 + p * z);
    return (1.0 - c2 * Math.exp(-z * z / 2.0) * t *
      (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
  } else {
    const t = 1.0 / (1.0 - p * z);
    return (c2 * Math.exp(-z * z / 2.0) * t *
      (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
  }
}


// CSVファイルダウンロード
function downloadCSV() {

  // テーブルデータを取得
  const rows = document.querySelectorAll("table tr");

  // 冒頭
  let csvContent = "A/Bテスト信頼度判定結果\n";

  rows.forEach(row => {
    let cols = row.querySelectorAll("td, th");
    let rowData = [];
    cols.forEach(col => {
      rowData.push(col.innerText || col.querySelector("input")?.value || "");
    });
    csvContent += rowData.join(",") + "\n";
  });

  // BOMを付与
  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, csvContent], { type: "text/csv" });
  const link = document.createElement('a');
  link.download = "download.csv";
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}
 
 //ボタンを取得する
 const downloadBtn = document.getElementById("download");
 //ボタンがクリックされたら「downloadCSV」を実行する
 downloadBtn.addEventListener("click", downloadCSV, false);
 